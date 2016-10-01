import { Component } from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'graphics',
  providers: [
  ],
  styleUrls: [ './graphics.style.scss' ],
  templateUrl: './graphics.template.html'
})
export class Graphics {
  // Set our default values
  localState = { value: '' };
  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('hello `Graphics` component');
  }
}
