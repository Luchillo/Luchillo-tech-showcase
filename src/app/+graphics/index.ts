import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Graphics } from './graphics.component';
import { WebGl } from './webgl/webgl.component';

console.log('`Graphics` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes: Routes = [
  { path: '',
    component: Graphics,
    children: [
      {path: '', component: WebGl},
      {path: 'webgl', component: WebGl}
    ]
  }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Graphics,
    WebGl
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export default class GraphicsModule {
  // static routes = routes;
}
