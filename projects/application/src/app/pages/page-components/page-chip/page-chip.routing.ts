import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PageChipExampleComponent,
  PageChipApiComponent,
  PageChipComponent
} from './page-chip.component';

export const PageChipRoutes: Routes = [
  {
    path: '',
    component: PageChipExampleComponent,
    outlet: 'example'
  },
  {
    path: '',
    component: PageChipApiComponent,
    outlet: 'api'
  },
  {
    path: '',
    component: PageChipComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageChipRoutes)],
  exports: [RouterModule]
})
export class PageChipRouting { }
