import { MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CbSocialButtonComponent } from './cb-social.component';


describe('CbSocialComponent', () => {

  let comp: CbSocialButtonComponent;
  let fixture: ComponentFixture<CbSocialButtonComponent>;
  let element: HTMLElement;
  const imageUrl = 'https://bit.ly/2vvFXCO';

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ CbSocialButtonComponent ],
      imports: [ MatIconModule, HttpClientModule ]
    });
    fixture = TestBed.createComponent(CbSocialButtonComponent);
    comp = fixture.componentInstance;
  });

  it('works for linkedin', () => {
    comp.socialMedia = 'linkedin';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement.querySelector('mat-icon');

    expect(element.getAttribute('ng-reflect-svg-icon')).toContain('linkedin');
  });

  it('works for github', () => {
    comp.socialMedia = 'github';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement.querySelector('mat-icon');

    expect(element.getAttribute('ng-reflect-svg-icon')).toContain('github');
  });

  it('works for twitter', () => {
    comp.socialMedia = 'twitter';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement.querySelector('mat-icon');

    expect(element.getAttribute('ng-reflect-svg-icon')).toContain('twitter');
  });

  it('works for instagram', () => {
    comp.socialMedia = 'instagram';
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement.querySelector('mat-icon');

    expect(element.getAttribute('ng-reflect-svg-icon')).toContain('instagram');
  });
});
