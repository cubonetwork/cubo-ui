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
        <li *ngFor="let item of items;" class="cb-carousel-item">
          <ng-container [ngTemplateOutlet]="item.template"></ng-container>
        </li>
      </ul>
    </div>
    <div *ngIf="showIndicators" class="cb-carousel-indicators">
      <button (click)="next()" class="btn btn-default">Next</button>
      <button (click)="prev()" class="btn btn-default">Prev</button>
    </div>
  `,
  styleUrls: ['./cb-carousel.component.scss']
})
export class CbCarouselComponent implements AfterViewInit { 
  @ContentChildren(CbCarouselItemDirective) items: QueryList<CbCarouselItemDirective>;
  @ViewChild('carousel') private carousel: ElementRef;
  @Input() showIndicators = true;
  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  carouselWrapperStyle = { };

  constructor(private builder: AnimationBuilder) { }

  next() {
    if ( this.currentSlide + 1 === this.items.length ) {
      return;
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  private buildAnimation( offset ) {
    return this.builder.build([
      animate('250ms ease-in', style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  prev() {
    if ( this.currentSlide === 0 ) {
      return;
    } 

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.itemWidth = this.carousel.nativeElement.children[0].getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      };
    });
    
  }
}
