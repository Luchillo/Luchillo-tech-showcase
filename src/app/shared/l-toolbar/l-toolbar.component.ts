import { Component, Output, EventEmitter } from '@angular/core';

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
  @Output() toggleMenuEvent: EventEmitter<boolean> = new EventEmitter();
  // Set our default values
  localState = { value: '' };

  private isMenuOpen: boolean = false;

  constructor(public appState: AppState) {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleMenuEvent.next(this.isMenuOpen);
  }
}
