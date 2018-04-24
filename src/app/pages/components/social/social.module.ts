import { CbSocialMediaModule } from '../../../cb-components/cb-social/cb-social-media.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

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
    CbSocialMediaModule
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
