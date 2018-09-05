import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageFlagExampleComponent,
  PageFlagApiComponent,
  PageFlagComponent
} from './page-flag.component';

export const PageFlagRoutes: Routes = [
  {
    path: '',
    component: PageFlagExampleComponent,
    outlet: 'example'
  },
  {
    path: '',
    component: PageFlagApiComponent,
    outlet: 'api'
  },
  {
    path: '',
    component: PageFlagComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageFlagRoutes)],
  exports: [RouterModule]
})
export class PageFlagRouting { }
