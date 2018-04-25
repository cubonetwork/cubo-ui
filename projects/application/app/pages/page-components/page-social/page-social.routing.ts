import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageSocialDescriptionComponent,
  PageSocialCodeHtmlComponent,
  PageSocialCodeCssComponent,
  PageSocialCodeTsComponent,
  PageSocialRenderComponent,
  PageSocialApiComponent,
  PageSocialComponent
} from './page-social.component';

export const PageSocialRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageSocialComponent
      },
      {
        path: '',
        component: PageSocialDescriptionComponent,
        outlet: 'description'
      },
      {
        path: '',
        component: PageSocialCodeHtmlComponent,
        outlet: 'code-html'
      },
      {
        path: '',
        component: PageSocialCodeTsComponent,
        outlet: 'code-ts'
      },
      {
        path: '',
        component: PageSocialCodeCssComponent,
        outlet: 'code-css'
      },
      {
        path: '',
        component: PageSocialRenderComponent,
        outlet: 'render'
      },
      {
        path: '',
        component: PageSocialApiComponent,
        outlet: 'api'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageSocialRoutes)],
  exports: [RouterModule]
})
export class PageSocialRouting { }
