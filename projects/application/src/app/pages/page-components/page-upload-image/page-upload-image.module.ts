import { ContentModule } from '@app/components/content/content.module';
import { CbUploadImageModule } from '@lib';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

import { PageUploadImageRouting } from './page-upload-image.routing';
import {
  PageUploadImageExampleComponent,
  PageUploadImageApiComponent,
  PageUploadImageComponent
} from './page-upload-image.component';

@NgModule({
  imports: [
    SharedModule,
    PageUploadImageRouting,
    CbUploadImageModule,
    MatIconModule,
    ContentModule
  ],
  declarations: [
    PageUploadImageExampleComponent,
    PageUploadImageApiComponent,
    PageUploadImageComponent
  ]
})
export class PageUploadImageModule { }
