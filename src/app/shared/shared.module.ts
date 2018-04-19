import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  declarations: [ ],
  exports: [
    CommonModule,
    MatTabsModule
  ]
})
export class SharedModule { }
