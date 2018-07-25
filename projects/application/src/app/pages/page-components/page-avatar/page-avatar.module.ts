import { ContentModule } from '@app/components/content/content.module';
import { CbAvatarModule } from '@lib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import {
  PageAvatarExampleComponent,
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
    ContentModule
  ],
  declarations: [
    PageAvatarExampleComponent,
    PageAvatarApiComponent,
    PageAvatarComponent
  ]
})
export class PageAvatarModule { }
