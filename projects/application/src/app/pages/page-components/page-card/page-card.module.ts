import { CbSocialModule, CbAvatarModule, CbCardModule } from '@lib:dev';
import { MatChipsModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { PageCardRouting } from './page-card.routing';
import {
  PageCardDescriptionComponent,
  PageCardCodeHtmlComponent,
  PageCardCodeCssComponent,
  PageCardCodeTsComponent,
  PageCardApiComponent,
  PageCardComponent
} from './page-card.component';

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
    PageCardApiComponent,
    PageCardComponent
  ]
})
export class PageCardModule { }
