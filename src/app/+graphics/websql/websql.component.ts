import { Component } from '@angular/core';

import { AppState } from '../../app.service';

import * as README from '../../../README';
@Component({
  selector: 'websql',
  providers: [
  ],
  // styleUrls: [ './websql.style.scss' ],
  templateUrl: './websql.template.html'
})
export class WebSql {
  // Set our default values
  localState = { value: '' };
  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('hello `websql` component');
  }
}
