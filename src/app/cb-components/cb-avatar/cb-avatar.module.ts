import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';

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
    CoreModule
  ]
})
export class CbAvatarModule { }
