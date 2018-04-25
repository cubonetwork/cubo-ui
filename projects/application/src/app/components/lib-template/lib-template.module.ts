import { SharedModule } from '@app/shared/shared.module';
import { MatTabsModule, MatExpansionModule, MatChipsModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { LibTemplateComponent } from './lib-template.component';

@NgModule({
  imports: [
    SharedModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
  ],
  exports: [
    LibTemplateComponent
  ],
  declarations: [
    LibTemplateComponent
  ]
})
export class LibTemplateModule { }
