import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphicsComponent } from './graphics.component';
import { WebGlComponent } from './webgl/webgl.component';

console.log('`Graphics` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes: Routes = [
  { path: '',
    component: GraphicsComponent,
    children: [
      {path: '', component: WebGlComponent},
      {path: 'webgl', component: WebGlComponent}
    ]
  }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    GraphicsComponent,
    WebGlComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export default class GraphicsModule {
  // static routes = routes;
}
