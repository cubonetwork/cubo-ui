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
    SharedModule
  ],
})
export class CbSocialMediaModule { }
