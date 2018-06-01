import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { CbCarouselComponent } from 'cubo-ui';

@Component({
  template: ``,
  selector: 'page-carousel'
})
export class PageCarouselComponent { }

@Component({
  selector: 'page-carousel-example',
  templateUrl: 'page-carousel-example.html'
})
export class PageCarouselExampleComponent { 
  @ViewChild('carousel') private carousel: CbCarouselComponent;

  next() {
    this.carousel.next();
  }

  prev() {
    this.carousel.prev();
  }
}

@Component({
  selector: 'page-carousel-api',
  templateUrl: 'page-carousel-api.html'
})
export class PageCarouselApiComponent { }
