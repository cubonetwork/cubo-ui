import { MatIconModule } from '@angular/material';
import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';

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
    SharedModule,
    MatIconModule
  ],
})
export class CbSocialMediaModule { }
