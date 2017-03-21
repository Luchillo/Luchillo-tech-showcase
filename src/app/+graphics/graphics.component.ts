import {
  Component,
  OnInit,
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'graphics',
  providers: [
  ],
  styleUrls: [ './graphics.style.scss' ],
  templateUrl: './graphics.template.html',
})
export class GraphicsComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  constructor(public appState: AppState) {
  }

  public ngOnInit() {
    console.log('hello `Graphics` component');
  }
}
