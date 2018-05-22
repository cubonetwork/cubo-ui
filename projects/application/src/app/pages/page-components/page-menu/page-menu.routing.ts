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
      component: PageMenuExampleComponent,
      outlet: 'example'
    },
    {
      path: '',
      component: PageMenuApiComponent,
      outlet: 'api'
    },
    {
      path: '',
      component: PageMenuComponent
    }
];
@NgModule({
  imports: [RouterModule.forChild(PageMenuRoutes)],
  exports: [RouterModule]
})
export class PageMenuRouting { }
