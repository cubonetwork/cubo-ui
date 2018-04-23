import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CbCardComponent,
  CbCardBadgesComponent,
  CbCardFooterComponent,
  CbCardTitleComponent,
  CbCardSubtitleComponent,
} from './cb-card.component';

@NgModule({
  exports: [
    CbCardComponent,
    CbCardBadgesComponent,
    CbCardFooterComponent,
    CbCardTitleComponent,
    CbCardSubtitleComponent,
  ],
  declarations: [
    CbCardComponent,
    CbCardBadgesComponent,
    CbCardFooterComponent,
    CbCardTitleComponent,
    CbCardSubtitleComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CbCardModule { }
