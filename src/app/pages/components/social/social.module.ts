import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSocialRouting } from './social.routing';
import { PageSocialComponent } from './social.component';

@NgModule({
  imports: [
    CommonModule,
    PageSocialRouting
  ],
  declarations: [PageSocialComponent]
})
export class PageSocialModule { }
