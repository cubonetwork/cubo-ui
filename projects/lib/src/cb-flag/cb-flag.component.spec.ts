import { MatIconModule } from '@angular/material/icon';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CbFlagComponent } from './cb-flag.component';

describe('CbFlagComponent', () => {
  let comp: CbFlagComponent;
  let fixture: ComponentFixture<CbFlagComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatIconModule ],
      declarations: [ CbFlagComponent ],
    });
    fixture = TestBed.createComponent(CbFlagComponent);
    comp = fixture.componentInstance;
  });

  describe('when left is 20', () => {
    beforeEach(() => {
      comp.left = 20;
      fixture.detectChanges();
    });

    it('should have the position class', () => {
      element = fixture.debugElement.nativeElement;
      expect(element.getAttribute('class')).toContain('flag--position');
    });

    it('should have "left: 20px"', () => {
      element = fixture.debugElement.nativeElement;
      expect(element.style.left).toContain('20px');
    });

    it('should have "position: relative" on parent', () => {
      element = fixture.debugElement.nativeElement;
      expect(element.parentElement.style.position).toContain('relative');
    });
  });

  describe('when right is 20', () => {
    beforeEach(() => {
      comp.right = 20;
      fixture.detectChanges();
    });

    it('should have the position class', () => {
      element = fixture.debugElement.nativeElement;
      expect(element.getAttribute('class')).toContain('flag--position');
    });

    it('should have "right: 20px"', () => {
      element = fixture.debugElement.nativeElement;
      expect(element.style.right).toContain('20px');
    });

    it('should have "position: relative" on parent', () => {
      element = fixture.debugElement.nativeElement;
      expect(element.parentElement.style.position).toContain('relative');
    });
  });

  describe('when color is...', () => {
    it('blue, should have the blue class', () => {
      comp.color = 'blue';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('flag--color-blue');
    });

    it('orange, should have the orange class', () => {
      comp.color = 'orange';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('flag--color-orange');
    });

    it('green, should have the green class', () => {
      comp.color = 'green';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('flag--color-green');
    });
  });
});
