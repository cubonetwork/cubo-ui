import { MatIconModule } from '@angular/material';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CbChipComponent, CbChipListComponent } from './cb-chip.component';

describe('CbChipComponent', () => {
  let comp: CbChipComponent;
  let fixture: ComponentFixture<CbChipComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatIconModule ],
      declarations: [ CbChipComponent, CbChipListComponent ],
    });
    fixture = TestBed.createComponent(CbChipComponent);
    comp = fixture.componentInstance;
  });

  describe('when bg is...', () => {
    it('true, should have the bg class', () => {
      comp.bg = true;
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--bg');
    });

    it('false, should not have the bg class', () => {
      comp.bg = false;
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).not.toContain('chip--bg');
    });
  });

  describe('when icon is...', () => {
    it('github, should have the github icon', () => {
      comp.icon = 'github';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement.querySelector('mat-icon');

      expect(element.getAttribute('ng-reflect-svg-icon')).toContain('github');
    });

    it('a valid value, should have the icon class', () => {
      comp.icon = 'github';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--icon');
    });

    it('undefined, should not have the icon class', () => {
      comp.icon = undefined;
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).not.toContain('chip--icon');
    });
  });

  describe('when size is...', () => {
    it('small, should have the small class', () => {
      comp.size = 'small';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--size-small');
    });

    it('medium, should have the medium class', () => {
      comp.size = 'medium';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--size-medium');
    });

    it('large, should have the large class', () => {
      comp.size = 'large';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--size-large');
    });
  });

  describe('when color is...', () => {
    it('blue, should have the blue class', () => {
      comp.color = 'blue';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-blue');
    });

    it('red, should have the red class', () => {
      comp.color = 'red';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-red');
    });

    it('orange, should have the orange class', () => {
      comp.color = 'orange';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-orange');
    });

    it('green, should have the green class', () => {
      comp.color = 'green';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-green');
    });

    it('gray-light, should have the gray-light class', () => {
      comp.color = 'gray-light';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-gray-light');
    });

    it('gray-lighter, should have the gray-lighter class', () => {
      comp.color = 'gray-lighter';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-gray-lighter');
    });

    it('purple, should have the purple class', () => {
      comp.color = 'purple';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-purple');
    });

    it('platinum, should have the platinum class', () => {
      comp.color = 'platinum';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-platinum');
    });

    it('gold, should have the gold class', () => {
      comp.color = 'gold';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-gold');
    });

    it('silver, should have the silver class', () => {
      comp.color = 'silver';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-silver');
    });

    it('bronze, should have the bronze class', () => {
      comp.color = 'bronze';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--color-bronze');
    });
  });
});

describe('CbChipListComponent', () => {
  let comp: CbChipListComponent;
  let fixture: ComponentFixture<CbChipListComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatIconModule ],
      declarations: [ CbChipComponent, CbChipListComponent ],
    });
    fixture = TestBed.createComponent(CbChipListComponent);
    comp = fixture.componentInstance;
  });

  describe('when direction is...', () => {
    it('horizontal, should have the horizontal class', () => {
      comp.direction = 'horizontal';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('list--h');
    });

    it('vertical, should have the vertical class', () => {
      comp.direction = 'vertical';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('list--v');
    });
  });
});
