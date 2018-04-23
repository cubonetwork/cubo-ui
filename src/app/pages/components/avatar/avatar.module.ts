import { CbAvatarModule } from '../../../cb-components/cb-avatar/cb-avatar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import {
  PageAvatarDescriptionComponent,
  PageAvatarCodeHtmlComponent,
  PageAvatarCodeCssComponent,
  PageAvatarCodeTsComponent,
  PageAvatarRenderComponent,
  PageAvatarApiComponent
} from './avatar.component';
import { PageAvatarRouting } from './avatar.routing';

@NgModule({
  imports: [
    CommonModule,
    PageAvatarRouting,
    SharedModule,
    CbAvatarModule
  ],
  declarations: [
    PageAvatarDescriptionComponent,
    PageAvatarCodeHtmlComponent,
    PageAvatarCodeCssComponent,
    PageAvatarCodeTsComponent,
    PageAvatarRenderComponent,
    PageAvatarApiComponent
  ]
})
export class PageAvatarModule { }
