import { CbFlagModule } from '@lib';
import { ContentModule } from '@app/components/content/content.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material';

import { PageFlagRouting } from './page-flag.routing';
import {
  PageFlagExampleComponent,
  PageFlagApiComponent,
  PageFlagComponent
} from './page-flag.component';

@NgModule({
  imports: [
    SharedModule,
    PageFlagRouting,
    CbFlagModule,
    MatIconModule,
    ContentModule
  ],
  declarations: [
    PageFlagExampleComponent,
    PageFlagApiComponent,
    PageFlagComponent
  ]
})
export class PageFlagModule { }
