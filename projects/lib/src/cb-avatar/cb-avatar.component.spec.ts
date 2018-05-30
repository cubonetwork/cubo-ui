import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CbAvatarComponent } from './cb-avatar.component';

describe('CbAvatarComponent', () => {
  let comp: CbAvatarComponent;
  let fixture: ComponentFixture<CbAvatarComponent>;
  let element: HTMLElement;
  const image = 'https://bit.ly/2vvFXCO';
  const nameTwoWords = 'Darth Vader';
  const nameOneWord = 'Darth';

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ CbAvatarComponent ],
    });
    fixture = TestBed.createComponent(CbAvatarComponent);
    comp = fixture.componentInstance;
  });

  it('shows the image for the given url', () => {
    comp.image = image;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('img');

    expect(element.getAttribute('src')).toContain(image);
  });

  describe('when there is no image', () => {
    it('shows the initials with 2 letters', () => {
      comp.name = nameTwoWords;
      fixture.detectChanges();
      element = fixture.nativeElement.querySelector('span');

      expect(element.innerHTML).toContain('DV');
    });

    it('shows the initials with only one letter', () => {
      comp.name = nameOneWord;
      fixture.detectChanges();
      element = fixture.nativeElement.querySelector('span');

      expect(element.innerHTML).toContain('D');
    });

  });

  it('has extra-small class when size is extra-small', () => {
    comp.size = 'xsmall';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('avatar--extra-small');
  });

  it('has small class when size is small', () => {
    comp.size = 'small';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('avatar--small');
  });

  it('has medium class when size is medium', () => {
    comp.size = 'medium';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('avatar--medium');
  });

  it('has large class when size is large', () => {
    comp.size = 'large';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('avatar--large');
  });

  it('has extra-large class when size is extra-large', () => {
    comp.size = 'xlarge';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('avatar--extra-large');
  });
});
