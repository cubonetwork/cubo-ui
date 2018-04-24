import { CbAvatarModule } from 'cubo-ui/cb-avatar/cb-avatar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import {
  PageAvatarDescriptionComponent,
  PageAvatarCodeHtmlComponent,
  PageAvatarCodeCssComponent,
  PageAvatarCodeTsComponent,
  PageAvatarApiComponent,
  PageAvatarComponent
} from './avatar.component';
import { PageAvatarRouting } from './avatar.routing';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PageAvatarRouting,
    SharedModule,
    CbAvatarModule,
    MatExpansionModule
  ],
  declarations: [
    PageAvatarDescriptionComponent,
    PageAvatarCodeHtmlComponent,
    PageAvatarCodeCssComponent,
    PageAvatarCodeTsComponent,
    PageAvatarApiComponent,
    PageAvatarComponent
  ]
})
export class PageAvatarModule { }
