import { ContentModule } from '@app/components/content/content.module';
import { NgModule } from '@angular/core';
import { CbCarouselModule } from 'cubo-ui';
import { SharedModule } from '@app/shared/shared.module';
import { PageCarouselRouting } from './page-carousel.routing';
import { MatButtonModule } from '@angular/material';
import { PageCarouselComponent, PageCarouselExampleComponent, PageCarouselApiComponent } from './page-carousel.component';

@NgModule({
  imports: [
    SharedModule,
    ContentModule,
    CbCarouselModule,
    PageCarouselRouting,
    MatButtonModule
  ],
  declarations: [
    PageCarouselComponent,
    PageCarouselExampleComponent,
    PageCarouselApiComponent
  ]
})
export class PageCarouselModule { }
