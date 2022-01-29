import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuxeryMainComponent } from './components/luxery-main/luxery-main.component';

const routes: Routes = [
  {
    path:':id',
    component: LuxeryMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LuxeryPageRoutingModule { }
