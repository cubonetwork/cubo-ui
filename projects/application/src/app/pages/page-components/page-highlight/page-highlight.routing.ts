import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageHighlightExampleComponent,
  PageHighlightApiComponent,
  PageHighlightComponent
} from './page-highlight.component';

export const PageHighlightRoutes: Routes = [
  {
    path: '',
    component: PageHighlightExampleComponent,
    outlet: 'example'
  },
  {
    path: '',
    component: PageHighlightApiComponent,
    outlet: 'api'
  },
  {
    path: '',
    component: PageHighlightComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageHighlightRoutes)],
  exports: [RouterModule]
})
export class PageHighlightRouting { }
