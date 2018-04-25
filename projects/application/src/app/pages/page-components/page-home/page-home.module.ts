import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHomeRouting } from './page-home.routing';
import { PageHomeComponent } from './page-home.component';

@NgModule({
  imports: [
    CommonModule,
    PageHomeRouting
  ],
  declarations: [PageHomeComponent]
})
export class PageHomeModule { }
