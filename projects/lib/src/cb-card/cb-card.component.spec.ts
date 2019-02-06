import { TestBed, ComponentFixture } from '@angular/core/testing';

import {
  CbCardComponent,
  CbCardFooterComponent
} from './cb-card.component';

describe('CbCardComponent', () => {
  let comp: CbCardComponent;
  let fixture: ComponentFixture<CbCardComponent>;
  let compFooter: CbCardFooterComponent;
  let fixtureFooter: ComponentFixture<CbCardFooterComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CbCardComponent,
        CbCardFooterComponent
      ],
    });
    fixture = TestBed.createComponent(CbCardComponent);
    fixtureFooter = TestBed.createComponent(CbCardFooterComponent);
    comp = fixture.componentInstance;
    compFooter = fixtureFooter.componentInstance;
  });

  it('has small class when size is small', () => {
    comp.size = 'small';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('cb-card--small');
  });

  it('has center class when center is true', () => {
    comp.center = true;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('cb-card--center');
  });

  it('has border class on footer when border is true', () => {
    compFooter.border = true;
    fixtureFooter.detectChanges();
    element = fixtureFooter.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('cb-card-footer--border');
  });
});
