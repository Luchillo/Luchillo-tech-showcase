/*
 * Angular 2 decorators and services
 */
import {
  OnInit,
} from '@angular/core';
import { Component, ViewEncapsulation, HostListener } from '@angular/core';
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
  templateUrl: './app.component.html'
  // template: `
  //   <nav>
  //     <span>
  //       <a [routerLink]=" ['./'] ">
  //         Index
  //       </a>
  //     </span>
  //     |
  //     <span>
  //       <a [routerLink]=" ['./home'] ">
  //         Home
  //       </a>
  //     </span>
  //     |
  //     <span>
  //       <a [routerLink]=" ['./graphics'] ">
  //         Graphics
  //       </a>
  //     </span>
  //     |
  //     <span>
  //       <a [routerLink]=" ['./detail'] ">
  //         Detail
  //       </a>
  //     </span>
  //     |
  //     <span>
  //       <a [routerLink]=" ['./about'] ">
  //         About
  //       </a>
  //     </span>
  //   </nav>

  //   <main>
  //     <router-outlet></router-outlet>
  //   </main>

  //   <!--
  //   <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

  //   <footer>
  //     <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
  //     <div>
  //       <a [href]="url">
  //         <img [src]="angularclassLogo" width="25%">
  //       </a>
  //     </div>
  //   </footer>
  //   -->
  // `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';


  public routes: MenuItem[] = [{
    label: 'Home',
    routerLink: ['home']
  }, {
    label: 'Graphics',
    routerLink: ['graphics'],
    items: [{
        label: 'WebGl',
        routerLink: ['graphics', 'webgl']
      }, {
        label: 'Three.js',
        routerLink: ['graphics', 'three.js']
      }]
  }];

  private resizeSubject:      Subject<boolean> = new Subject();
  private resizeSubscription: Subscription;
  private isMenuOpen: boolean = false;

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

  ngOnInit() {
  }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }

  toggleMenu(isOpen) {
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
