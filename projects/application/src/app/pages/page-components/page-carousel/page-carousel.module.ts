import { ContentModule } from '@app/components/content/content.module';
import { NgModule } from '@angular/core';
import { CbCarouselModule } from '@lib';
import { SharedModule } from '@app/shared/shared.module';
import { PageCarouselRouting } from './page-carousel.routing';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { PageCarouselComponent, PageCarouselExampleComponent, PageCarouselApiComponent, CarouselDialogExampleComponent } from './page-carousel.component';

@NgModule({
  imports: [
    SharedModule,
    ContentModule,
    CbCarouselModule,
    PageCarouselRouting,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    PageCarouselComponent,
    PageCarouselExampleComponent,
    PageCarouselApiComponent,
    CarouselDialogExampleComponent
  ],
  entryComponents: [
    CarouselDialogExampleComponent
  ]
})
export class PageCarouselModule { }
