import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { MainContactComponent } from './components/main-contact/main-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { Section3Component } from './components/section3/section3.component';


@NgModule({
  declarations: [
    MainContactComponent,
    Section1Component,
    Section2Component,
    ReactiveFormsComponent,
    Section3Component
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ContactPageModule { }
