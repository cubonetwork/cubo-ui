import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [ ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ]
})
export class SharedModule { }
