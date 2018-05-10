import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CbAvatarComponent } from './cb-avatar.component';

describe('CbAvatarComponent', () => {
  let comp: CbAvatarComponent;
  let fixture: ComponentFixture<CbAvatarComponent>;
  let element: HTMLElement;
  const imageUrl = 'https://bit.ly/2vvFXCO';
  const name = 'Darth Vader';

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ CbAvatarComponent ],
    });
    fixture = TestBed.createComponent(CbAvatarComponent);
    comp = fixture.componentInstance;
  });

  it('shows the image for the given url', () => {
    comp.imageUrl = imageUrl;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('img');

    expect(element.getAttribute('src')).toContain(imageUrl);
  });

  it('shows the initials when there is no image', () => {
    comp.name = name;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('span');

    expect(element.innerHTML).toContain('DV');
  });

  it('has extra-small class when size is extra-small', () => {
    comp.size = 'xsmall';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('-extra-small');
  });

  it('has small class when size is small', () => {
    comp.size = 'small';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('-small');
  });

  it('has medium class when size is medium', () => {
    comp.size = 'medium';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('-medium');
  });

  it('has large class when size is large', () => {
    comp.size = 'large';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('-large');
  });

  it('has extra-large class when size is extra-large', () => {
    comp.size = 'xlarge';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('-extra-large');
  });

  it('has square class when type is square', () => {
    comp.type = 'square';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;

    expect(element.getAttribute('class')).toContain('-square');
  });
});
