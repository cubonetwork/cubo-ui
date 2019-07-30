import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbAvatarComponent
} from './cb-avatar.component';

@NgModule({
  exports: [
    CbAvatarComponent
  ],
  declarations: [
    CbAvatarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CbAvatarModule { }
