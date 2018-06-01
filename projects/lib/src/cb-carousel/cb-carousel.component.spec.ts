import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { 
  animate, 
  AnimationBuilder, 
  AnimationFactory, 
  AnimationPlayer, 
  style 
} from '@angular/animations';
import { CbCarouselComponent, CbCarouselItemDirective } from './cb-carousel.component';

describe('CbCarouselComponent', () => {
  let component: CbCarouselComponent;
  let fixture: ComponentFixture<CbCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CbCarouselComponent,
        CbCarouselItemDirective 
      ],
      providers: [
        AnimationBuilder
      ]
    });
    fixture = TestBed.createComponent(CbCarouselComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
