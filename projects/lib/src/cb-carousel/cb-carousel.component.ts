import { 
  AfterViewInit, 
  Component, 
  ContentChildren, 
  Directive, 
  ElementRef, 
  Input, 
  OnInit, 
  QueryList, 
  TemplateRef, 
  ViewChild, 
  ViewChildren 
} from '@angular/core';
import { 
  animate, 
  AnimationBuilder, 
  AnimationFactory, 
  AnimationPlayer, 
  style 
} from '@angular/animations';

@Directive({ selector: '[cbCarouselItem]' })
export class CbCarouselItemDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: 'cb-carousel',
  template: `
    <div class="cb-carousel-wrapper" [ngStyle]="carouselWrapperStyle">
      <ul class="cb-carousel-inner" #carousel>
        <li *ngFor="let item of slides;" class="cb-carousel-item">
          <ng-container [ngTemplateOutlet]="item.template"></ng-container>
        </li>
      </ul>
    </div>
    <div *ngIf="showIndicators" class="cb-carousel-indicators">
      <ul [ngStyle]="indicatorsStyle" #indicators>
        <li *ngFor="let item of slides; let i = index" [class]="i === 0 ? 'active' : ''" (click)="goToSlide(i)"></li>
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
  private itemWidth: number;
  private currentSlide = 0;
  carouselWrapperStyle = { };
  indicatorsStyle = { };

  constructor(private animationBuilder: AnimationBuilder) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setFirstSlideWidth();
      this.carouselWrapperStyle = { width: `${this.itemWidth}px` };
      this.indicatorsStyle = { 'margin-left': `${(this.itemWidth / 2) - (this.slides.length * 12) / 2}px` };
    });
  }

  private setFirstSlideWidth() {
    this.itemWidth = this.carousel.nativeElement.children[0].getBoundingClientRect().width;
  }

  private startSlideTransition() {
    const slideTransition: AnimationFactory = this.animationBuilder.build([
      animate('250ms ease-in', style({ transform: `translateX(-${this.currentSlide * this.itemWidth}px)` }))
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
      indicator.className = '';
    }
    this.indicators.nativeElement.children[this.currentSlide].className = 'active';
  }

  next() {
    if (this.currentSlide + 1 === this.slides.length) {
      return;
    }
    this.goToSlide((this.currentSlide + 1) % this.slides.length);
  }

  prev() {
    if (this.currentSlide === 0) {
      return;
    } 
    this.goToSlide(((this.currentSlide - 1) + this.slides.length) % this.slides.length);
  }
}
