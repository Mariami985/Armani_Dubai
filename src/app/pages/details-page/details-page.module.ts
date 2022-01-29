import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsMainComponent } from './components/details-main/details-main.component';
import { DeMainSection01Component } from './components/details-main/de-main-section01/de-main-section01.component';


@NgModule({
  declarations: [
    DetailsMainComponent,
    DeMainSection01Component,
  ],
  imports: [
    CommonModule,
    DetailsPageRoutingModule
  ]
})
export class DetailsPageModule { }
