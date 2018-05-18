import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbCardComponent,
  CbCardImageComponent,
  CbCardFooterComponent,
  CbCardTitleComponent,
  CbCardPretitleComponent,
  CbCardSubtitleComponent,
} from './cb-card.component';

@NgModule({
  exports: [
    CbCardComponent,
    CbCardImageComponent,
    CbCardFooterComponent,
    CbCardTitleComponent,
    CbCardPretitleComponent,
    CbCardSubtitleComponent,
  ],
  declarations: [
    CbCardComponent,
    CbCardImageComponent,
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
