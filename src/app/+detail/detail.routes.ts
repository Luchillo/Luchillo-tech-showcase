import { Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

export const routes: Routes = [
  { path: '', children: [
    { path: '', component: DetailComponent },
    { path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
  ]},
];
