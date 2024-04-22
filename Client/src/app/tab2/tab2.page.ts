import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      alert(this.checkVersion());
    }, 3000);
  }

  checkVersion() {
    const agent = window.navigator.userAgent;
    const start = agent.indexOf('OS ');
    if ((agent.indexOf('iPhone') > -1 || agent.indexOf('iPad') > -1) && start > -1) {
      return window.Number(agent.substr(start + 3, 3).replace('_', '.'));
    }
    return 0;
  }

}
