import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule { }
