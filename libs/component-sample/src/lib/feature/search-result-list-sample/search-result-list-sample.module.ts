import { NgModule } from '@angular/core';
import {
  SdsAccordionModule, SdsToolbarModule, SdsPageModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultListSampleComponent } from './search-result-list-sample.component';
import { SearchResultListSampleDataComponent } from './search-result-list-sample-data.component';
import { SdsSearchResultListModule } from '@gsa-sam/components';
import { SearchResultListSampleData2Component } from './search-result-list-sample-data2.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SdsActionsMenuModule } from '@sam-design-system/layouts';
import { SdsResultListChildComponent } from './result-list-child.component';
import { SearchResultCardSampleComponent } from './search-result-card-sample.component';
import { SearchResultListSampleCardDataComponent } from './search-result-list-sample-card-data.component';

@NgModule({
  imports: [FontAwesomeModule, SdsSideNavigationModule, SdsAccordionModule, CommonModule, FormsModule,
    SdsToolbarModule, SdsPageModule, SdsSearchResultListModule, SdsActionsMenuModule],
  exports: [SearchResultListSampleComponent, SearchResultCardSampleComponent],
  declarations: [SearchResultListSampleComponent, SearchResultListSampleDataComponent, SearchResultListSampleData2Component,SdsResultListChildComponent, SearchResultCardSampleComponent, SearchResultListSampleCardDataComponent],
  providers: []
})
export class SearchResultListSampleModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, sds);
  }
}
