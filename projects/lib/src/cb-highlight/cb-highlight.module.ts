import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbHighlightComponent,
  CbHighlihtHeaderComponent,
  CbHighlihtContentComponent
} from './cb-highlight.component';

@NgModule({
  exports: [
    CbHighlightComponent,
    CbHighlihtHeaderComponent,
    CbHighlihtContentComponent,
  ],
  declarations: [
    CbHighlightComponent,
    CbHighlihtHeaderComponent,
    CbHighlihtContentComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CbHighlightModule { }
