import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { animate, AnimationBuilder, AnimationFactory, style } from '@angular/animations';

@Directive({ selector: '[cbCarouselItem]' })
export class CbCarouselItemDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: 'cb-carousel',
  template: `
    <div class="wrapper" (swiperight)="prev()" (swipeleft)="next()">
      <div class="inner" #carousel>
        <section *ngFor="let item of slides;" class="inner__item">
          <ng-container [ngTemplateOutlet]="item.template"></ng-container>
        </section>
      </div>
    </div>
    <div *ngIf="showIndicators" class="indicators">
      <nav class="list" #indicators>
        <button *ngFor="let item of slides; let i = index" [class]="i === 0 ? 'list__item list__item--active' : 'list__item'" (click)="goToSlide(i)"></button>
      </nav>
    </div>
  `,
  styleUrls: ['./cb-carousel.component.scss']
})
export class CbCarouselComponent implements AfterViewInit {
  @ContentChildren(CbCarouselItemDirective) slides: QueryList<CbCarouselItemDirective>;
  @ViewChild('carousel') private carousel: ElementRef;
  @ViewChild('indicators') private indicators: ElementRef;

  @Input() showIndicators = true;
  currentSlide = 0;

  constructor(private animationBuilder: AnimationBuilder) { }

  ngAfterViewInit() { }

  private startSlideTransition() {
    const slideTransition: AnimationFactory = this.animationBuilder.build([
      animate('250ms ease-in', style({ transform: `translateX(-${this.currentSlide * 100}%)` }))
    ]);
    slideTransition.create(this.carousel.nativeElement).play();
    this.updateIndicator();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.startSlideTransition();
  }

  updateIndicator() {
    for (const indicator of this.indicators.nativeElement.children) {
      indicator.className = 'list__item';
    }
    this.indicators.nativeElement.children[this.currentSlide].className = 'list__item list__item--active';
  }

  next() {
    return (this.currentSlide + 1 === this.slides.length) ? false : this.goToSlide((this.currentSlide + 1) % this.slides.length);
  }

  prev() {
    return (this.currentSlide === 0) ? false : this.goToSlide(((this.currentSlide - 1) + this.slides.length) % this.slides.length);
  }
}
