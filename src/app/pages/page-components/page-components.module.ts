import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatExpansionModule, MatChipsModule, MatCardModule } from '@angular/material';
import { NavbarModule } from '@app/components/navbar/navbar.module';

import { PageComponentsRouting } from './page-components.routing';
import { PageComponentsComponent } from './page-components.component';

@NgModule({
  imports: [
    SharedModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    PageComponentsRouting,
    NavbarModule
  ],
  declarations: [
    PageComponentsComponent
  ],
  providers: []
})
export class PageComponentsModule { }
