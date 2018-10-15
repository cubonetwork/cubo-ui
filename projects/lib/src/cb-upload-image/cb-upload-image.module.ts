import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbUploadImageComponent
} from './cb-upload-image.component';

@NgModule({
  exports: [
    CbUploadImageComponent
  ],
  declarations: [
    CbUploadImageComponent
  ],
  imports: [
    CommonModule
  ],
})
export class CbUploadImageModule { }
