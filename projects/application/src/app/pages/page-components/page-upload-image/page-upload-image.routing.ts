import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageUploadImageExampleComponent,
  PageUploadImageApiComponent,
  PageUploadImageComponent
} from './page-upload-image.component';

export const PageUploadImageRoutes: Routes = [
  {
    path: '',
    component: PageUploadImageExampleComponent,
    outlet: 'example'
  },
  {
    path: '',
    component: PageUploadImageApiComponent,
    outlet: 'api'
  },
  {
    path: '',
    component: PageUploadImageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageUploadImageRoutes)],
  exports: [RouterModule]
})
export class PageUploadImageRouting { }
