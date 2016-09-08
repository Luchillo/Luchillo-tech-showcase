import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { SlideMenuModule } from 'primeng/primeng';

// Components
import { LToolbarComponent } from './l-toolbar';

@NgModule({
  imports:      [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    LToolbarComponent
  ],
  exports:      [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    SlideMenuModule,

    LToolbarComponent
  ]
})
export class SharedModule {}
