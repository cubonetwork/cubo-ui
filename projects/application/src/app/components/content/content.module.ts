import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { ContentComponent } from './content.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ContentComponent
  ],
  declarations: [
    ContentComponent
  ]
})
export class ContentModule { }
