import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule, MatExpansionModule, MatChipsModule, MatCardModule, MatListModule } from '@angular/material';

import { PageComponentsRouting } from './page-components.routing';
import { PageComponentsComponent } from './page-components.component';

@NgModule({
  imports: [
    SharedModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    PageComponentsRouting,
    FlexLayoutModule
  ],
  declarations: [
    PageComponentsComponent
  ],
  providers: []
})
export class PageComponentsModule { }
