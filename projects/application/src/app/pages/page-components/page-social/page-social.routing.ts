import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageSocialExampleComponent,
  PageSocialApiComponent,
  PageSocialComponent
} from './page-social.component';

export const PageSocialRoutes: Routes = [
  {
    path: '',
    component: PageSocialExampleComponent,
    outlet: 'example'
  },
  {
    path: '',
    component: PageSocialApiComponent,
    outlet: 'api'
  },
  {
    path: '',
    component: PageSocialComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageSocialRoutes)],
  exports: [RouterModule]
})
export class PageSocialRouting { }
