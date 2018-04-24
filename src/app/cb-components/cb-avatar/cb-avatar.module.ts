import { SharedModule } from '@app/shared/shared.module';
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
    SharedModule
  ]
})
export class CbAvatarModule { }
