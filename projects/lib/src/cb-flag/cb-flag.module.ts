import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbFlagComponent
} from './cb-flag.component';

@NgModule({
  exports: [
    CbFlagComponent
  ],
  declarations: [
    CbFlagComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CbFlagModule { }
