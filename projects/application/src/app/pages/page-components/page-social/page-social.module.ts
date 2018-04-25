import { CbSocialModule } from '@lib';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material';

import { PageSocialRouting } from './page-social.routing';
import {
  PageSocialDescriptionComponent,
  PageSocialCodeHtmlComponent,
  PageSocialCodeCssComponent,
  PageSocialCodeTsComponent,
  PageSocialRenderComponent,
  PageSocialApiComponent,
  PageSocialComponent
} from './page-social.component';

@NgModule({
  imports: [
    PageSocialRouting,
    CbSocialModule,
    MatIconModule
  ],
  declarations: [
    PageSocialDescriptionComponent,
    PageSocialCodeHtmlComponent,
    PageSocialCodeCssComponent,
    PageSocialCodeTsComponent,
    PageSocialRenderComponent,
    PageSocialApiComponent,
    PageSocialComponent
  ]
})
export class PageSocialModule { }
