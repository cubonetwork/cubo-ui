import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [ ],
  exports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
