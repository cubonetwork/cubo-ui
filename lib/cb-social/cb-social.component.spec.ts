import { MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CbSocialMediaButtonComponent } from './cb-social-media.component';


describe('CbSocialComponent', () => {

  let comp: CbSocialMediaButtonComponent;
  let fixture: ComponentFixture<CbSocialMediaButtonComponent>;
  let element: HTMLElement;
  const imageUrl = 'https://bit.ly/2vvFXCO';

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ CbSocialMediaButtonComponent ],
      imports: [ MatIconModule, HttpClientModule ]
    });
    fixture = TestBed.createComponent(CbSocialMediaButtonComponent);
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
