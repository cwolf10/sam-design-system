import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './filters-hideexpression.component.html'
})
export class FiltersHideExpression {
  constructor() {}

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  public onFiltersChange$ = new BehaviorSubject<object>(null);

  // Select
  sdsSelect: FormlyFieldConfig[] = [
    {
      key: 'location.country',
      type: 'select',
      templateOptions: {
        label: 'Select Country',
        description: 'Select country.',
        required: true,
        options: [
          { label: 'United States of America', value: 'USA' },
          { label: 'Canada', value: 'CA' },
          { label: 'India', value: 'IND' },
          { label: 'Mexico', value: 'MX' },
          { label: 'United Kingdom', value: 'UK' },
          { label: 'Australia', value: 'AUS' }
        ]
      },
      lifecycle: {
        onChanges: function(form, field) {
          field.formControl.valueChanges.subscribe(v => {
            console.log(field, this.model, 'test');
          });
        }
      }
    },
    {
      key: 'location.province',
      type: 'select',
      templateOptions: {
        label: 'Select province',
        description: 'Select province.',
        required: true,
        options: [
          { label: 'Manitoba', value: 'MB' },
          { label: 'Newfoundland and Labrador', value: 'NL' },
          { label: 'Prince Edward Island', value: 'PE' },
          { label: 'Nova Scotia', value: 'NS' },
          { label: 'New Brunswick', value: 'NB' },
          { label: 'Quebec', value: 'QC' },
          { label: 'Ontario', value: 'ON' },
          { label: 'Saskatchewan', value: 'SK' },
          { label: 'Alberta', value: 'AB' },
          { label: 'Yukon', value: 'YT' },
          { label: 'Nunavut', value: 'NU' }
        ]
      },
      hideExpression: () => {
        if (this.model && this.model.location && this.model.location.country) {
          return this.model.location.country !== 'CA';
        }
        return true;
      }
    },
    {
      key: 'location.state',
      type: 'input',
      templateOptions: {
        label: 'State',
        description: 'State'
      },
      hideExpression: () => {
        if (this.model && this.model.location && this.model.location.country) {
          return this.model.location.country === 'CA';
        }
        return true;
      }
    },
    {
      key: 'location.city',
      type: 'input',
      templateOptions: {
        label: 'City',
        description: 'City'
      },
      hideExpression: () => {
        return !(
          this.model &&
          this.model.location &&
          this.model.location.country &&
          (this.model.location.state ||
            (this.model.location.province &&
              this.model.location.country === 'CA'))
        );
      }
    },
    {
      key: 'location.street',
      type: 'input',
      templateOptions: {
        label: 'Street',
        hideOptional: true,
        description: 'Street'
      },
      hideExpression: () => {
        return !(
          this.model &&
          this.model.location &&
          this.model.location.country &&
          (this.model.location.state ||
            (this.model.location.province &&
              this.model.location.country === 'CA')) &&
          this.model.location.city
        );
      }
    }
  ];
  onModelChange(ev) {
    console.log(ev, 'change');
  }

  updateModel() {
    this.model = {
      location: {
        state: '',
        province: '',
        street: '',
        city: '',
        country:
          this.model && this.model.location && this.model.location.country
            ? this.model.location.country
            : ''
      }
    };
  }
  // public ngOnInit() {
  //   this.onFiltersChange$.subscribe((res: any) => {
  //     console.log(res, 'mod');

  //     this.model = {
  //       location: {
  //         state: '',
  //         province: '',
  //         street: '',
  //         city: '',
  //         country:
  //           res && res[0].location && res[0].location.country
  //             ? res[0].location.country
  //             : ''
  //       }
  //     };
  //     console.log(this.model, 'modnext');
  //   });
  // }
}
