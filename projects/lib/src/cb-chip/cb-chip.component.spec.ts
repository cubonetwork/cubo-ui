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
      comp.bgColor = '#000';
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;

      expect(element.getAttribute('class')).toContain('chip--bg');
    });

    it('false, should not have the bg class', () => {
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
