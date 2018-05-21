import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageMenuExampleComponent,
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
        component: PageMenuExampleComponent,
        outlet: 'example'
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
