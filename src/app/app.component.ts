/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

import { MenuItem } from 'primeng/primeng';

import { AppState } from './app.service';

import { animMenuRight } from '../theme/ng2-animations/menu-animations';

import '../theme/app.core.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  animations: [
    animMenuRight
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnDestroy {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  public routes: MenuItem[] = [{
    label: 'Home',
    routerLink: ['home'],
  }, {
    label: 'Graphics',
    routerLink: ['graphics'],
    items: [{
      label: 'WebGl',
      routerLink: ['graphics', 'webgl'],
    }, {
      label: 'Three.js',
      routerLink: ['graphics', 'three.js'],
    }],
  }, {
    label: 'Detail',
    routerLink: ['detail'],
  }, {
    label: 'Barrel',
    routerLink: ['barrel'],
  }];

  public isMenuOpen: boolean = false;

  private resizeSubject:      Subject<boolean> = new Subject();
  private resizeSubscription: Subscription;

  @HostListener('window:resize')
  public onWindowResize() {
    this.resizeSubject.next(true);
  }

  constructor(
    public appState: AppState
  ) {
    this.resizeSubscription = this.resizeSubject
    .debounceTime(250)
    .subscribe((event) => {
      this.toggleMenu(true);
    });
  }

  public ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }

  public toggleMenu(isOpen) {
    console.log('toggleMenu: ', isOpen, window.innerWidth);

    if (window.innerWidth >= 1024) {
      return this.isMenuOpen = false;
    }
    this.isMenuOpen = isOpen;
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
