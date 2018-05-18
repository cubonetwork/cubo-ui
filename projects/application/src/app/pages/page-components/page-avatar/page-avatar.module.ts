import { CbAvatarModule } from 'cubo-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { MatExpansionModule } from '@angular/material';

import {
  PageAvatarDescriptionComponent,
  PageAvatarCodeHtmlComponent,
  PageAvatarCodeCssComponent,
  PageAvatarCodeTsComponent,
  PageAvatarApiComponent,
  PageAvatarComponent
} from './page-avatar.component';
import { PageAvatarRouting } from './page-avatar.routing';

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
