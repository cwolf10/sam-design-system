import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: './result-list-basic.component.html',
})

export class ResultListBasic {

  constructor(private change: ChangeDetectorRef) { }

  itemsDefault = [
    { title: 'First', id: 1 },
    { title: 'Second', id: 2 },
    { title: 'Third', id: 3 },
    { title: 'Fourth', id: 4 },
    { title: 'Fifth', id: 5 , hasNewerData:true},
  ];

  errorModel = {};
  
  items = {
    
   results : this.itemsDefault
  };

  infoModel = {
    metadata: {
      messages: [
        {
          type: 'info',
          title: 'No Search',
          message: `No Search criteria. Please try again
                      If you continue to have this problem, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk.</a>`,
          classes: 'usa-custom',
          buttons: [
            {
              text: 'Go back',
              classes: 'usa-button--secondary',
              action: 'gobackbutton'
            },
            {
              text: 'Go forward',
              classes: 'usa-button usa-button--secondary width-card margin-y-2',
              action: 'gobackbutton'
            }
          ]
        }
      ]
    }
  };
  searchModel: any = {};

}
