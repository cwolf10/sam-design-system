import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogService } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';
import { SdsFormlyDialogData } from '../../formly-dialog/formly-dialog-data.model';
import { SdsFormlyDialogComponent } from '../../formly-dialog/formly-dialog.component';

@Component({
  selector: 'sds-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss']
})
export class AdvancedFiltersComponent {
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

  @Input() public toggleModel: any = {}

  /**
   *    Options for the form.
   */
  @Input() public options: FormlyFormOptions = {};
  @Output() toggleChange = new EventEmitter<boolean>();

  constructor(
    public dialog: SdsDialogService,
    private advancedFiltersService: SdsAdvancedFiltersService
  ) { }

  openDialog(): void {
    const historyToggleField = [{
      key: 'historyToggle',
      type: 'checkbox',
      templateOptions: {
        hideOptional: true,
        label: this.toggleModel.lable,
        description: this.toggleModel.description,
      },
    }];
    this.fields = Object.keys(this.toggleModel).length === 0 ? this.fields :
      (this.model.hasOwnProperty('historyToggle') ? this.fields : [...historyToggleField, ...this.fields]);

    const modalFields: FormlyFieldConfig[] = this.advancedFiltersService.convertToCheckboxes(
      this.fields
    );

    const data: SdsFormlyDialogData = {
      fields: modalFields,
      submit: 'Update',
      title: 'More Filters',
    };

    const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
      width: 'medium',
      data: data
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const response = this.advancedFiltersService.updateFields(
          result,
          this.fields,
          this.model
        );

        this.fields = response.fields;
        this.model = response.model;
        if (Object.keys(this.toggleModel).length === 0) {
          this.toggleChange.emit(result['historyToggle']);
        }
      }
    });
  }
}