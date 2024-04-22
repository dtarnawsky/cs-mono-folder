import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  willChange() {
    console.log('willChange');
  }

  didChange() {
    console.log('didChange');
  }  
}
