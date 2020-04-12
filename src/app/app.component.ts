import { Component } from '@angular/core';
import * as Fuse from 'fuse.js';

@Component({
  selector: 'app-root',
  template: `
    <input
      matInput
      placeholder="Search"
      (input)="filter($event)"
      [(ngModel)]="filterInput"
    />
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listToFilter: string[] = ['a', 'b', 'c', 'd'];

  filter(event) {
    let fuse = new Fuse(this.listToFilter);
  }
}
