import { SharedModule } from '@app/shared/shared.module';
import { ContentModule } from '@app/components/content/content.module';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CbMenuModule } from '@lib';
import { NgModule } from '@angular/core';

import { PageMenuRouting } from './page-menu.routing';
import {
  PageMenuExampleComponent,
  PageMenuApiComponent,
  PageMenuComponent
} from './page-menu.component';

@NgModule({
  imports: [
    SharedModule,
    PageMenuRouting,
    CbMenuModule,
    MatButtonModule,
    MatChipsModule,
    ContentModule
  ],
  declarations: [
    PageMenuExampleComponent,
    PageMenuApiComponent,
    PageMenuComponent
  ]
})
export class PageMenuModule { }
