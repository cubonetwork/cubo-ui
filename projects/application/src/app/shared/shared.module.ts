import { MatExpansionModule, MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    MatExpansionModule
  ],
  declarations: [ ],
  exports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
