import { SharedModule } from '@app/shared/shared.module';
import { MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { LibTemplateComponent } from './lib-template.component';

@NgModule({
  imports: [
    SharedModule,
    MatTabsModule
  ],
  exports: [
    LibTemplateComponent
  ],
  declarations: [
    LibTemplateComponent
  ]
})
export class LibTemplateModule { }
