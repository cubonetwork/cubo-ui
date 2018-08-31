import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbChipComponent
} from './cb-chip.component';

@NgModule({
  exports: [
    CbChipComponent
  ],
  declarations: [
    CbChipComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CbChipModule { }
