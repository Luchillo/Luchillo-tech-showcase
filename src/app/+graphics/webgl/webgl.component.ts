import { Component } from '@angular/core';

import { AppState } from '../../app.service';

import * as README from '../../../README';
@Component({
  selector: 'webgl',
  providers: [
  ],
  // styleUrls: [ './webgl.style.scss' ],
  templateUrl: './webgl.template.html'
})
export class WebGl {
  // Set our default values
  localState = { value: '' };
  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('hello `webgl` component');
  }
}
