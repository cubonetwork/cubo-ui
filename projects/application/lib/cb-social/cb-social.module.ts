import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbSocialComponent
} from './cb-social.component';

@NgModule({
  exports: [
    CbSocialComponent
  ],
  declarations: [
    CbSocialComponent
  ],
  imports: [
    CommonModule
  ],
})
export class CbSocialModule { }
