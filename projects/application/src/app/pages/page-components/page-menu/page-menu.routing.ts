import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageMenuDescriptionComponent,
  PageMenuCodeHtmlComponent,
  PageMenuCodeCssComponent,
  PageMenuCodeTsComponent,
  PageMenuApiComponent,
  PageMenuComponent
} from './page-menu.component';

export const PageMenuRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageMenuComponent
      },
      {
        path: '',
        component: PageMenuDescriptionComponent,
        outlet: 'description'
      },
      {
        path: '',
        component: PageMenuCodeHtmlComponent,
        outlet: 'code-html'
      },
      {
        path: '',
        component: PageMenuCodeTsComponent,
        outlet: 'code-ts'
      },
      {
        path: '',
        component: PageMenuCodeCssComponent,
        outlet: 'code-css'
      },
      {
        path: '',
        component: PageMenuApiComponent,
        outlet: 'api'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageMenuRoutes)],
  exports: [RouterModule]
})
export class PageMenuRouting { }
