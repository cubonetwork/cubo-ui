import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';

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
    CoreModule
  ],
})
export class CbSocialMediaModule { }
