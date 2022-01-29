import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LuxeryPageRoutingModule } from './luxery-page-routing.module';
import { LuxeryMainComponent } from './components/luxery-main/luxery-main.component';


@NgModule({
  declarations: [
    LuxeryMainComponent
  ],
  imports: [
    CommonModule,
    LuxeryPageRoutingModule
  ]
})
export class LuxeryPageModule { }
