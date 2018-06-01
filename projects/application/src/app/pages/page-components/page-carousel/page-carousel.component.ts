import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

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
  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ];
}

@Component({
  selector: 'page-carousel-api',
  templateUrl: 'page-carousel-api.html'
})
export class PageCarouselApiComponent { }
