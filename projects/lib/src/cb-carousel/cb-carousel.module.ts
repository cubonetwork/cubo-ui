import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CbCarouselComponent, CbCarouselItemDirective } from './cb-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CbCarouselComponent,
    CbCarouselItemDirective
  ],
  declarations: [
    CbCarouselComponent,
    CbCarouselItemDirective
  ]
})
export class CbCarouselModule { }
