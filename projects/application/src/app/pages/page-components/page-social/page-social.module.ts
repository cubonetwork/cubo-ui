import { ContentModule } from '@app/components/content/content.module';
import { CbSocialModule } from '@lib';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

import { PageSocialRouting } from './page-social.routing';
import {
  PageSocialExampleComponent,
  PageSocialApiComponent,
  PageSocialComponent
} from './page-social.component';

@NgModule({
  imports: [
    SharedModule,
    PageSocialRouting,
    CbSocialModule,
    MatIconModule,
    ContentModule
  ],
  declarations: [
    PageSocialExampleComponent,
    PageSocialApiComponent,
    PageSocialComponent
  ]
})
export class PageSocialModule { }
