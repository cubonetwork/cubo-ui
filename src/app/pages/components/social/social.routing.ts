import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSocialComponent } from './social.component';

export const PageSocialRoutes: Routes = [
  {
    path: '',
    component: PageSocialComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageSocialRoutes)],
  exports: [RouterModule]
})
export class PageSocialRouting { }
