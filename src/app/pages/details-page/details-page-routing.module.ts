import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMainComponent } from './components/details-main/details-main.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetailsMainComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPageRoutingModule { }
