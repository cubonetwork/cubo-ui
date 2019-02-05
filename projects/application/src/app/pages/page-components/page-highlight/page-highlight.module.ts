import { CbHighlightModule } from '@lib';
import { ContentModule } from '@app/components/content/content.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { PageHighlightRouting } from './page-highlight.routing';
import {
  PageHighlightExampleComponent,
  PageHighlightApiComponent,
  PageHighlightComponent
} from './page-highlight.component';

@NgModule({
  imports: [
    SharedModule,
    PageHighlightRouting,
    CbHighlightModule,
    ContentModule
  ],
  declarations: [
    PageHighlightExampleComponent,
    PageHighlightApiComponent,
    PageHighlightComponent
  ]
})
export class PageHighlightModule { }
