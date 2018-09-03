import { ContentModule } from '@app/components/content/content.module';
import { CbChipModule } from '@lib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import {
  PageChipExampleComponent,
  PageChipApiComponent,
  PageChipComponent
} from './page-chip.component';
import { PageChipRouting } from './page-chip.routing';

@NgModule({
  imports: [
    CommonModule,
    PageChipRouting,
    SharedModule,
    CbChipModule,
    ContentModule
  ],
  declarations: [
    PageChipExampleComponent,
    PageChipApiComponent,
    PageChipComponent
  ]
})
export class PageChipModule { }
