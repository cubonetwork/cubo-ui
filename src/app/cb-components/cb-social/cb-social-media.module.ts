import { SharedModule } from '@app/shared/shared.module';
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
    SharedModule
  ],
})
export class CbSocialMediaModule { }
