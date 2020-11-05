import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '@app/shared/shared.module';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    SharedModule,
    MatListModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent
  ]
})
export class NavbarModule { }
