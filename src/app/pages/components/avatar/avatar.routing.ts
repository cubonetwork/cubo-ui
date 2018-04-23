import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageAvatarDescriptionComponent,
  PageAvatarCodeHtmlComponent,
  PageAvatarCodeCssComponent,
  PageAvatarCodeTsComponent,
  PageAvatarRenderComponent,
  PageAvatarApiComponent
} from './avatar.component';

export const PageAvatarRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageAvatarDescriptionComponent,
        outlet: 'description'
      },
      {
        path: '',
        component: PageAvatarCodeHtmlComponent,
        outlet: 'code-html'
      },
      {
        path: '',
        component: PageAvatarCodeTsComponent,
        outlet: 'code-ts'
      },
      {
        path: '',
        component: PageAvatarCodeCssComponent,
        outlet: 'code-css'
      },
      {
        path: '',
        component: PageAvatarRenderComponent,
        outlet: 'render'
      },
      {
        path: '',
        component: PageAvatarApiComponent,
        outlet: 'api'
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(PageAvatarRoutes)],
  exports: [RouterModule]
})
export class PageAvatarRouting { }
