import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule, MatExpansionModule, MatChipsModule, MatCardModule } from '@angular/material';

import { PageComponentsRouting } from './components.routing';
import { PageComponentsComponent } from './components.component';

@NgModule({
  imports: [
    SharedModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    PageComponentsRouting
  ],
  declarations: [
    PageComponentsComponent
  ],
  providers: []
})
export class PageComponentsModule { }
