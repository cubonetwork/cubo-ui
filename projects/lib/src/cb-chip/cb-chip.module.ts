import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbChipComponent,
  CbChipListComponent
} from './cb-chip.component';

@NgModule({
  exports: [
    CbChipComponent,
    CbChipListComponent
  ],
  declarations: [
    CbChipComponent,
    CbChipListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CbChipModule { }
