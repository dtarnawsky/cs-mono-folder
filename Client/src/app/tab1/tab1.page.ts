import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lastIndex;
  cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7',
    'Card 8', 'Card 9', 'Card 10', 'Card 11', 'Card 12', 'Card 13'];
  constructor(private router: Router) { }

  open(card) {
    this.router.navigateByUrl("card");
  }

  onScroll(event) {
    const index = Math.trunc(event.srcElement.scrollLeft / event.srcElement.children[0].clientWidth);
    if (index !== this.lastIndex) {
      this.lastIndex = index;
      console.log(index);
    }
  }
}
