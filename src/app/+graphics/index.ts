import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Graphics } from './graphics.component';
import { WebSql } from './websql/websql.component';

console.log('`Graphics` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes: Routes = [
  { path: '',
    component: Graphics,
    children: [
      {path: '', component: WebSql}
    ]
  }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Graphics,
    WebSql
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export default class AboutModule {
  // static routes = routes;
}
