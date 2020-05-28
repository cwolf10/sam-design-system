import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionExpand } from './templateoption-expand.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [TemplateOptionExpand],
  exports: [TemplateOptionExpand],
  bootstrap: [TemplateOptionExpand]
})
export class TemplateOptionsExpandModule {}
