import { SharedModule } from '@app/shared/shared.module';
import { ContentModule } from '@app/components/content/content.module';
import { MatButtonModule, MatChipsModule } from '@angular/material';
import { CbMenuModule } from 'cubo-ui';
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
