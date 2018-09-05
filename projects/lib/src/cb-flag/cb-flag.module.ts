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
    CommonModule
  ]
})
export class CbFlagModule { }
