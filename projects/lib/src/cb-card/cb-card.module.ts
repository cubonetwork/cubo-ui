import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbCardComponent,
  CbCardBadgesComponent,
  CbCardFooterComponent,
  CbCardTitleComponent,
  CbCardPretitleComponent,
  CbCardSubtitleComponent,
} from './cb-card.component';

@NgModule({
  exports: [
    CbCardComponent,
    CbCardBadgesComponent,
    CbCardFooterComponent,
    CbCardTitleComponent,
    CbCardPretitleComponent,
    CbCardSubtitleComponent,
  ],
  declarations: [
    CbCardComponent,
    CbCardBadgesComponent,
    CbCardFooterComponent,
    CbCardTitleComponent,
    CbCardPretitleComponent,
    CbCardSubtitleComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CbCardModule { }
