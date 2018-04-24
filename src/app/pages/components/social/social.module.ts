import { CbSocialModule } from 'cubo-ui/cb-social/cb-social.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material';

import { PageSocialRouting } from './social.routing';
import {
  PageSocialDescriptionComponent,
  PageSocialCodeHtmlComponent,
  PageSocialCodeCssComponent,
  PageSocialCodeTsComponent,
  PageSocialRenderComponent,
  PageSocialApiComponent,
  PageSocialComponent
} from './social.component';

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
