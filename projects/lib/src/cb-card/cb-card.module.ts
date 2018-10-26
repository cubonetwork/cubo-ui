import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CbCardComponent,
  CbCardImageComponent,
  CbCardTitleComponent,
  CbCardPretitleComponent,
  CbCardDescriptionComponent,
  CbCardHeaderComponent,
  CbCardFooterComponent,
  CbCardInfoComponent
} from './cb-card.component';

@NgModule({
  exports: [
    CbCardComponent,
    CbCardImageComponent,
    CbCardHeaderComponent,
    CbCardFooterComponent,
    CbCardTitleComponent,
    CbCardPretitleComponent,
    CbCardDescriptionComponent,
    CbCardInfoComponent
  ],
  declarations: [
    CbCardComponent,
    CbCardImageComponent,
    CbCardHeaderComponent,
    CbCardFooterComponent,
    CbCardTitleComponent,
    CbCardPretitleComponent,
    CbCardDescriptionComponent,
    CbCardInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CbCardModule { }
