import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  CbSocialMediaButtonComponent
} from './cb-social-media.component';

@NgModule({
  exports: [
    CbSocialMediaButtonComponent
  ],
  declarations: [
    CbSocialMediaButtonComponent
  ],
  imports: [
    CommonModule
  ],
})
export class CbSocialMediaModule { }
