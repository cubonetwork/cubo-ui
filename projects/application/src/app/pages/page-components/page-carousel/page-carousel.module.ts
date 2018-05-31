import { NgModule } from '@angular/core';
import { CbCarouselModule } from 'cubo-ui';
import { CommonModule } from '@angular/common';
import { PageCarouselRouting } from './page-carousel.routing';
import { PageCarouselComponent, PageCarouselExampleComponent, PageCarouselApiComponent } from './page-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    CbCarouselModule,
    PageCarouselRouting
  ],
  declarations: [
    PageCarouselComponent,
    PageCarouselExampleComponent,
    PageCarouselApiComponent
  ]
})
export class PageCarouselModule { }
