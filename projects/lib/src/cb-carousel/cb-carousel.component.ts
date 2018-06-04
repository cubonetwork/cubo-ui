import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({ selector: '[cbCarouselItem]' })
export class CbCarouselItemDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: 'cb-carousel',
  template: `
    <div class="cb-carousel-wrapper" [ngStyle]="carouselWrapperStyle" (swiperight)="prev()" (swipeleft)="next()">
      <ul class="cb-carousel-inner" #carousel>
        <li *ngFor="let item of slides;" class="cb-carousel-item">
          <ng-container [ngTemplateOutlet]="item.template"></ng-container>
        </li>
      </ul>
    </div>
    <div *ngIf="showIndicators" class="cb-carousel-indicators">
      <ul [ngStyle]="indicatorsStyle" class="list" #indicators>
        <li *ngFor="let item of slides; let i = index" [class]="i === 0 ? 'list__item list__item--active' : 'list__item'" (click)="goToSlide(i)"></li>
      </ul>
    </div>
  `,
  styleUrls: ['./cb-carousel.component.scss']
})
export class CbCarouselComponent implements AfterViewInit { 
  @ContentChildren(CbCarouselItemDirective) slides: QueryList<CbCarouselItemDirective>;
  @ViewChild('carousel') private carousel: ElementRef;
  @ViewChild('indicators') private indicators: ElementRef;

  @Input() showIndicators = true;
  @Input() width = 0;
  private slideWidth: number;
  currentSlide = 0;
  carouselWrapperStyle = { };
  indicatorsStyle = { };

  constructor(private animationBuilder: AnimationBuilder) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setFirstSlideWidth();
      this.carouselWrapperStyle = { width: `${this.slideWidth}px` };
      this.indicatorsStyle = { 'margin-left': `${(this.slideWidth / 2) - (this.slides.length * 10) / 2}px` };
    });
  }

  private setFirstSlideWidth() {
    this.slideWidth = this.width === 0 ? this.carousel.nativeElement.children[0].getBoundingClientRect().width : this.width;
  }

  private startSlideTransition() {
    const slideTransition: AnimationFactory = this.animationBuilder.build([
      animate('250ms ease-in', style({ transform: `translateX(-${this.currentSlide * this.slideWidth}px)` }))
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
