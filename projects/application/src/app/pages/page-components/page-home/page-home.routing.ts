import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home.component';

export const PageHomeRoutes: Routes = [
  {
    path: '',
    component: PageHomeComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageHomeRoutes)],
  exports: [RouterModule]
})
export class PageHomeRouting { }
