import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageCardDescriptionComponent,
  PageCardCodeHtmlComponent,
  PageCardCodeCssComponent,
  PageCardCodeTsComponent,
  PageCardApiComponent,
  PageCardComponent
} from './page-card.component';

export const PageCardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageCardComponent
      },
      {
        path: '',
        component: PageCardDescriptionComponent,
        outlet: 'description'
      },
      {
        path: '',
        component: PageCardCodeHtmlComponent,
        outlet: 'code-html'
      },
      {
        path: '',
        component: PageCardCodeTsComponent,
        outlet: 'code-ts'
      },
      {
        path: '',
        component: PageCardCodeCssComponent,
        outlet: 'code-css'
      },
      {
        path: '',
        component: PageCardApiComponent,
        outlet: 'api'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageCardRoutes)],
  exports: [RouterModule]
})
export class PageCardRouting { }
