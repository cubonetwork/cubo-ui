import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbCarouselComponent, CbCarouselItemDirective } from './cb-carousel.component';

describe('CbCarouselComponent', () => {
  let component: CbCarouselComponent;
  let fixture: ComponentFixture<CbCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CbCarouselComponent,
        CbCarouselItemDirective 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});