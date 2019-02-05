import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbHighlightComponent,
  CbHighlithHeaderComponent,
  CbHighlithContentComponent
} from './cb-highlight.component';

@NgModule({
  exports: [
    CbHighlightComponent,
    CbHighlithHeaderComponent,
    CbHighlithContentComponent,
  ],
  declarations: [
    CbHighlightComponent,
    CbHighlithHeaderComponent,
    CbHighlithContentComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CbHighlightModule { }
