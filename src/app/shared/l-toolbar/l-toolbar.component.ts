import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AppState } from '../../app.service';

import * as README from '../../../README';
@Component({
  selector: 'l-toolbar',
  providers: [
  ],
  styleUrls: [ './l-toolbar.style.scss' ],
  template: `
    <div (click)='toggleMenu()' class='bars-icon'>
      <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
    </div>
    <div>
      <h2>
        Luchillo's tech showcase
      </h2>
    </div>
  `
})
export class LToolbarComponent {
  @Input()  toggleMenuValue: boolean;
  @Output() toggleMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  // Set our default values
  localState = { value: '' };

  constructor(public appState: AppState) {
  }

  toggleMenu() {
    this.toggleMenuEvent.next(!this.toggleMenuValue);
  }
}
