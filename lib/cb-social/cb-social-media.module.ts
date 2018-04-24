import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbSocialMediaComponent
} from './cb-social-media.component';

@NgModule({
  exports: [
    CbSocialMediaComponent
  ],
  declarations: [
    CbSocialMediaComponent
  ],
  imports: [
    CommonModule
  ],
})
export class CbSocialMediaModule { }
