import {
  Component,
  OnInit,
} from '@angular/core';

import { AppState } from '../../app.service';

import * as README from '../../../README';
@Component({
  selector: 'webgl',
  providers: [
  ],
  // styleUrls: [ './webgl.style.scss' ],
  templateUrl: './webgl.template.html'
})
export class WebGlComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  constructor(public appState: AppState) {
  }

  public ngOnInit() {
    console.log('hello `webgl` component');
  }
}
