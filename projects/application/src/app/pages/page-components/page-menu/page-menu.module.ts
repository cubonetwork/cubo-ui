import { MatButtonModule, MatChipsModule } from '@angular/material';
import { CbMenuModule } from '@lib';
import { NgModule } from '@angular/core';

import { PageMenuRouting } from './page-menu.routing';
import {
  PageMenuDescriptionComponent,
  PageMenuCodeHtmlComponent,
  PageMenuCodeCssComponent,
  PageMenuCodeTsComponent,
  PageMenuApiComponent,
  PageMenuComponent
} from './page-menu.component';

@NgModule({
  imports: [
    PageMenuRouting,
    CbMenuModule,
    MatButtonModule,
    MatChipsModule
  ],
  declarations: [
    PageMenuDescriptionComponent,
    PageMenuCodeHtmlComponent,
    PageMenuCodeCssComponent,
    PageMenuCodeTsComponent,
    PageMenuApiComponent,
    PageMenuComponent
  ]
})
export class PageMenuModule { }
