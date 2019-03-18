import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PageAccordionExampleComponent,
  PageAccordionApiComponent,
  PageAccordionComponent
} from './page-accordion.component';

export const PageAccordionRoutes: Routes = [
  {
    path: '',
    component: PageAccordionExampleComponent,
    outlet: 'example'
  },
  {
    path: '',
    component: PageAccordionApiComponent,
    outlet: 'api'
  },
  {
    path: '',
    component: PageAccordionComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageAccordionRoutes)],
  exports: [RouterModule]
})
export class PageAccordionRouting { }
