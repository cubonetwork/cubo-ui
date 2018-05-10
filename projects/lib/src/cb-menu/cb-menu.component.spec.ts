import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import {
  CbMenuComponent,
  CbMenuButtonComponent
} from './cb-menu.component';

describe('CbMenuComponent', () => {
  let comp: CbMenuComponent;
  let fixture: ComponentFixture<CbMenuComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CbMenuComponent
      ],
    });
    fixture = TestBed.createComponent(CbMenuComponent);
    comp = fixture.componentInstance;
  });

  it('open menu when click on button', () => {
    element = fixture.nativeElement;
    fixture.nativeElement.querySelector('.button').click();
    fixture.detectChanges();
    expect(element.getAttribute('class')).toContain('menu--active');
  });

  it('has backdrop class when backdrop is enabled', () => {
    comp.backdrop = true;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('menu--backdrop');
  });

  it('has top-left class when position is "top left', () => {
    comp.position = 'top left';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('menu--top-left');
  });

  it('has top-right class when position is "top right', () => {
    comp.position = 'top right';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('menu--top-right');
  });

  it('has bottom-left class when position is "bottom left', () => {
    comp.position = 'bottom left';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('menu--bottom-left');
  });

  it('has bottom-right class when position is "bottom right', () => {
    comp.position = 'bottom right';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('menu--bottom-right');
  });
});
