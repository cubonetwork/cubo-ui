import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { CbCarouselComponent, CbCarouselItemDirective } from './cb-carousel.component';
import { DebugElement, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import 'hammerjs';

@Component({
  selector: 'cb-carousel-wrapper-component',
  template: `<cb-carousel [width]="300">
    <ng-container *cbCarouselItem>
      <div>Slide 1</div>
    </ng-container>
    <ng-container *cbCarouselItem>
      <div>Slide 2</div>
    </ng-container>
    <ng-container *cbCarouselItem>
      <div>Slide 3</div>
    </ng-container>
  </cb-carousel>`
})
export class CbCarouselWrapperComponent { }

describe('CbCarouselComponent', () => {
  let component: CbCarouselComponent;
  let fixture: ComponentFixture<CbCarouselWrapperComponent>;
  let indicators: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ 
        CbCarouselComponent,
        CbCarouselItemDirective,
        CbCarouselWrapperComponent
      ],
      providers: [
        AnimationBuilder
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbCarouselWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
    
    indicators = fixture.debugElement.query(By.css('.cb-carousel-indicators'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting showIndicators to false hide indicators', () => {
    component.showIndicators = false;
    fixture.detectChanges();
    
    expect(indicators).toBeFalsy();
  });
});
