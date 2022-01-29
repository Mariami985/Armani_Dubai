import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact-page/contact-page.module').then(item=> item.ContactPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(item => item.HomePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details-page/details-page.module').then(item => item.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
