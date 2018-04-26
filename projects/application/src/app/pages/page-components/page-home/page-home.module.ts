import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHomeRouting } from './page-home.routing';
import { PageHomeComponent } from './page-home.component';
import { ContentModule } from '@app/components/content/content.module';

@NgModule({
  imports: [
    CommonModule,
    PageHomeRouting,
    ContentModule
  ],
  declarations: [PageHomeComponent]
})
export class PageHomeModule { }
