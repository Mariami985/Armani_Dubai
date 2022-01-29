import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeSection1Component } from './components/home-main/home-section1/home-section1.component';
import { HomeMainSection02Component } from './components/home-main/home-main-section02/home-main-section02.component';


@NgModule({
  declarations: [
    HomeMainComponent,
    HomeSection1Component,
    HomeMainSection02Component
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
