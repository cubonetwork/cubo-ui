import { MatIconModule } from '@angular/material';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CbHighlightComponent } from './cb-highlight.component';

describe('CbHighlightComponent', () => {
  let comp: CbHighlightComponent;
  let fixture: ComponentFixture<CbHighlightComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatIconModule ],
      declarations: [ CbHighlightComponent ],
    });
    fixture = TestBed.createComponent(CbHighlightComponent);
    comp = fixture.componentInstance;
  });

  describe('when position is left', () => {
    beforeEach(() => {
      comp.position = 'left';
      fixture.detectChanges();
    });

    it('should have the position left class', () => {
      element = fixture.debugElement.nativeElement.querySelector('.dialog');
      expect(element.getAttribute('class')).toContain('dialog--left');
    });
  });

  describe('when position is right', () => {
    beforeEach(() => {
      comp.position = 'right';
      fixture.detectChanges();
    });

    it('should have the position right class', () => {
      element = fixture.debugElement.nativeElement.querySelector('.dialog');
      expect(element.getAttribute('class')).toContain('dialog--right');
    });
  });
});
