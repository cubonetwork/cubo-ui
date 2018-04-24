import { CbCardModule } from '../../../cb-components/cb-card/cb-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { PageCardRouting } from './card.routing';
import {
  PageCardDescriptionComponent,
  PageCardCodeHtmlComponent,
  PageCardCodeCssComponent,
  PageCardCodeTsComponent,
  PageCardRenderComponent,
  PageCardApiComponent,
  PageCardComponent
} from './card.component';

@NgModule({
  imports: [
    CommonModule,
    PageCardRouting
  ],
  declarations: [
    PageCardDescriptionComponent,
    PageCardCodeHtmlComponent,
    PageCardCodeCssComponent,
    PageCardCodeTsComponent,
    PageCardRenderComponent,
    PageCardApiComponent,
    PageCardComponent
  ]
})
export class PageCardModule { }
