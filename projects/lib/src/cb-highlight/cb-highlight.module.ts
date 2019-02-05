import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbHighlightComponent
} from './cb-highlight.component';

@NgModule({
  exports: [
    CbHighlightComponent
  ],
  declarations: [
    CbHighlightComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CbHighlightModule { }
