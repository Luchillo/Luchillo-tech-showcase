import {
  Component,
  OnInit
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { MDService } from '../shared';

import { AppState } from '../app.service';
// import { Title } from './title';
// import { XLarge } from './x-large';

import * as README from '../../../README';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  public readme: SafeHtml;
  constructor(public appState: AppState, mdService: MDService) {
    this.readme = mdService.makeHtml(README);
    // console.log('README: ', this.readme);
  }

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
