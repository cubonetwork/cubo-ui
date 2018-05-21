import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '@app/components/content/content.module';

import { PageHomeRouting } from './page-home.routing';
import { PageHomeComponent } from './page-home.component';

@NgModule({
  imports: [
    CommonModule,
    PageHomeRouting,
    ContentModule
  ],
  declarations: [PageHomeComponent]
})
export class PageHomeModule { }
