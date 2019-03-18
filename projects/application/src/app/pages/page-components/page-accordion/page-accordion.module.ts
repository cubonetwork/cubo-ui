import { ContentModule } from '@app/components/content/content.module';
import { CbAccordionModule } from '@lib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import {
  PageAccordionExampleComponent,
  PageAccordionApiComponent,
  PageAccordionComponent
} from './page-accordion.component';
import { PageAccordionRouting } from './page-accordion.routing';

@NgModule({
  imports: [
    CommonModule,
    PageAccordionRouting,
    SharedModule,
    CbAccordionModule,
    ContentModule
  ],
  declarations: [
    PageAccordionExampleComponent,
    PageAccordionApiComponent,
    PageAccordionComponent
  ]
})
export class PageAccordionModule { }
