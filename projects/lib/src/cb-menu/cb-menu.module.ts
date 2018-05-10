import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CbMenuComponent,
  CbMenuItemComponent,
  CbMenuChipComponent,
  CbMenuButtonComponent,
  CbMenuContentComponent
} from './cb-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CbMenuComponent,
    CbMenuItemComponent,
    CbMenuChipComponent,
    CbMenuButtonComponent,
    CbMenuContentComponent
  ],
  declarations: [
    CbMenuComponent,
    CbMenuItemComponent,
    CbMenuChipComponent,
    CbMenuButtonComponent,
    CbMenuContentComponent
  ]
})
export class CbMenuModule { }
