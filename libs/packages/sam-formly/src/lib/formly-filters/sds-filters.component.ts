import {
  Component,
  Input,
  Output,
  EventEmitter,
  Optional,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as qs from 'qs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'sds-filters',
  templateUrl: './sds-filters.component.html'
})
export class SdsFiltersComponent implements OnInit {
  /**
   * Pass in a Form Group for ReactiveForms Support
   */
  @Input() public form: FormGroup;

  /**
   *  Fields are used to configure the UI components
   */
  @Input() public fields: FormlyFieldConfig[];

  /**
   *  Model used to display the filter values.
   */
  @Input() public model: any;

  /**
   *    Options for the form.
   */
  @Input() public options: FormlyFormOptions = {};

  /**
   *  Emit results when model updated
   * To enable History Tracking
   *  If advanced filters dialog should be displayed -- defaults to false
   */
  @Input() advancedFilters: boolean = false;

  /**
   * Timer id for the timer awaiting the service call for more typeing
   */
  @Input() public isHistoryEnable: boolean = true;

  /**
  * To get clean model without null and empty
  */
  @Input() public getCleanModel: boolean = false;

  /**
   *  Emit results when model updated
   */
  // TODO: check type -- Formly models are typically objects
  @Output() filterChange = new EventEmitter<object[]>();

  _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
  _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
  overwrite = (baseObj: any, newObj: any) => {
    const result = {};
    for (const key in baseObj) {
      if (Array.isArray(baseObj[key])) {
        result[key] = newObj[key] || null;
      } else if (this._isObj(baseObj[key])) {
        result[key] = this.overwrite(baseObj[key], newObj[key] || {});
      } else {
        result[key] = newObj[key] || null;
      }
    }
    return result;
  };

  constructor(
    @Optional()
    public formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
   // this.fields = this.addOption();
    if (this.isHistoryEnable) {
      this.route.queryParams.subscribe(params => {
        if (this._isEmpty(this.form.getRawValue())) {
          const paramModel = this.convertToModel(params);
          this.updateChange(paramModel);
         setTimeout(() => {
            this.form.patchValue({
              ...this.model, ...paramModel
            }, { emitEvent: false })
          });

        } else {
          const updatedFormValue = this.overwrite(
            this.form.getRawValue(),
            this.convertToModel(params)
          );
          this.form.setValue(updatedFormValue);
          this.updateChange(updatedFormValue);
        }
      });
    }
    this.cdr.detectChanges();
  }
 
  addOption() {
    const updatedFields: FormlyFieldConfig[] = [];
    this.fields.forEach(field => {
      if(field){
        if(field.fieldGroup) {
          field.fieldGroup.forEach(subField => {
            if(subField.type == 'input'){
              field.modelOptions.updateOn = 'blur'
            } else  if(subField.type == 'autocomplete'){
              field.templateOptions.isFormlyType = true;
            }

          })
        } else {
          if(field.type == 'input'){
            field.modelOptions.updateOn = 'blur'
          } else  if(field.type == 'autocomplete'){
            field.templateOptions.isFormlyType = true;
          }

        }
      } 
      updatedFields.push(field);
    })

    return updatedFields;

  }

  onModelChange(change: any) {
    if (this.isHistoryEnable) {
      const params = this.convertToParam(change);
      this.router.navigate(['.'], {
        relativeTo: this.route,
        queryParams: params
      });
    }
    this.updateChange(change);
    this.cdr.detectChanges();
  }

  updateChange(change) {
    const updatedModel = this.getCleanModel ? this.convertToModel(change) : change;
    this.filterChange.emit([updatedModel]);
    if (this.formlyUpdateComunicationService) {
      this.formlyUpdateComunicationService.updateFilter(updatedModel);
    }
  }

  convertToParam(filters) {
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false
    });
    if (encodedValues) {
      const target = {};
      encodedValues.split('&').forEach(pair => {
        if (pair !== '') {
          const splitpair = pair.split('=');
         const isDate=  this.isDate(splitpair[1]);
         if(isDate){
         splitpair[1] =  (this.datePipe.transform(splitpair[1], 'MM/dd/yyyy')).toString();
         }
      
          target[splitpair[0]] = splitpair[1] === '' ? null : splitpair[1];
        }
      });
      return target;
    } else {
      return '';
    }
  }
  isDate(_date){
        const _regExp  = new RegExp('^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$');
        return _regExp.test(_date);
    }
  convertToModel(filters) {
    let obj = {};
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false
    });
    obj = qs.parse(encodedValues);
    return obj;
  }
}
