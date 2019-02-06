import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CbUploadImageComponent } from './cb-upload-image.component';

describe('CbUploadImageComponent', () => {
  let comp: CbUploadImageComponent;
  let fixture: ComponentFixture<CbUploadImageComponent>;
  let element: HTMLElement;
  const image = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png';
  const icon = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png';
  const label = 'Change image';
  const size = 100;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CbUploadImageComponent ],
    });
    fixture = TestBed.createComponent(CbUploadImageComponent);
    comp = fixture.componentInstance;
  });

  it('shows the label text for the given label', () => {
    comp.label = label;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('.upload__button');

    expect(element.innerHTML).toContain(label);
  });

  it('shows the preview image for the given url', () => {
    comp.value = image;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('.preview__image');

    expect(element.getAttribute('src')).toContain(image);
  });

  it('add disabled state when disabled is true', () => {
    comp.disabled = true;
    fixture.detectChanges();
    element = fixture.nativeElement;

    expect(element.getAttribute('class')).toContain('upload-image--disabled');
  });

  it('shows the preview icon for the given url', () => {
    comp.icon = icon;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('.preview__icon');

    expect(element.style.backgroundImage).toContain(icon);
  });

  it('set the preview height for the given size', () => {
    comp.size = size;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('.preview');

    expect(element.style.height).toContain(size.toString());
  });

  describe('when type is...', () => {
    it('circle, preview should has to be a circle', () => {
      comp.size = size;
      comp.type = 'circle';
      fixture.detectChanges();
      element = fixture.nativeElement.querySelector('.preview');

      expect(element.style.height).toContain(size.toString());
      expect(element.style.width).toContain(size.toString());
      expect(element.style.cssText).toContain(`border-radius: 50%`);
    });
  });

  describe('when fit is...', () => {
    it('contain, preview image should have object-fit: contain', () => {
      comp.value = image;
      comp.fit = 'contain';
      fixture.detectChanges();
      element = fixture.nativeElement.querySelector('.preview__image');

      expect(element.style.cssText).toContain('object-fit: contain');
    });

    it('cover, preview image should have object-fit: cover', () => {
      comp.value = image;
      comp.fit = 'cover';
      fixture.detectChanges();
      element = fixture.nativeElement.querySelector('.preview__image');

      expect(element.style.cssText).toContain('object-fit: cover');
    });
  });
});
