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
  @Input()
  public toggleMenuValue: boolean;
  @Output()
  public toggleMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  // Set our default values
  public localState = { value: '' };

  constructor(public appState: AppState) {
  }

  public toggleMenu() {
    this.toggleMenuEvent.next(!this.toggleMenuValue);
  }
}
