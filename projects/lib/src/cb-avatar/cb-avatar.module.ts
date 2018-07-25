import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
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
    CommonModule,
    LazyLoadImageModule
  ]
})
export class CbAvatarModule { }
