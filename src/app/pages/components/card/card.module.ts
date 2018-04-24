import { CbSocialModule } from 'cubo-ui/cb-social/cb-social.module';
import { CbAvatarModule } from 'cubo-ui/cb-avatar/cb-avatar.module';
import { MatChipsModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CbCardModule } from 'cubo-ui/cb-card/cb-card.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { PageCardRouting } from './card.routing';
import {
  PageCardDescriptionComponent,
  PageCardCodeHtmlComponent,
  PageCardCodeCssComponent,
  PageCardCodeTsComponent,
  PageCardRenderComponent,
  PageCardApiComponent,
  PageCardComponent
} from './card.component';

@NgModule({
  imports: [
    PageCardRouting,
    CbCardModule,
    MatChipsModule,
    CbAvatarModule,
    CbSocialModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    PageCardDescriptionComponent,
    PageCardCodeHtmlComponent,
    PageCardCodeCssComponent,
    PageCardCodeTsComponent,
    PageCardRenderComponent,
    PageCardApiComponent,
    PageCardComponent
  ]
})
export class PageCardModule { }
