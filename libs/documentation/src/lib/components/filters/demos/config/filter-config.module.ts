import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FiltersConfig } from './filter-config.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFiltersModule } from '@sam-design-system/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SdsFiltersModule,
    FormlyModule.forRoot()
  ],
  declarations: [FiltersConfig],
  exports: [FiltersConfig],
  bootstrap: [FiltersConfig]
})
export class FiltersConfigModule {}