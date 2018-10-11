import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeHtml } from '@angular/platform-browser';

/**
 * Component `<cb-upload-image>` to make a share action
 * @param label Set if bg is true or false
 * @param bg Set bg image to preview
 * @param image Set image to preview
 * @param size Set size of preview
 * @param fit Change fit of image preview
 * @param type Set type style of preview:
 * @param uploaded Emit value after upload is done
 */
@Component({
  selector: 'cb-upload-image',
  template: `
    <div class="upload">
      <label class="upload__button">
        <input class="upload__input" type="file" accept="image/*" (change)="uploadImage($event)" #upload>
        {{ label }}
      </label>
    </div>
    <div class="preview" [style.background-image]="_bg" [style.height]="_height" [style.width]="_width" [style.border-radius]="_borderRadius" (click)="upload.click()">
      <img class="preview__image" [src]="_image" *ngIf="_image" [style.object-fit]="fit">
    </div>
  `,
  styleUrls: ['./cb-upload-image.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
  host: {
    'class': 'cb-upload-image'
  }
})
export class CbUploadImageComponent implements OnInit {
  @Input() label = 'Upload image';
  @Input() bg: string;
  @Input() image: string;
  @Input() size = '64';
  @Input() fit: 'contain' | 'cover' = 'contain';
  @Input() type: '' | 'circle' = '';
  @Output() uploaded: EventEmitter<any> = new EventEmitter();

  _bg: SafeStyle;
  _image: SafeHtml;
  _borderRadius: string;
  _height: string;
  _width: string;

  constructor(
    private sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._bg = this.bg ? this.sanitizer.bypassSecurityTrustStyle(`url(${this.bg})`) : '';
    this._image = this.image ? this.sanitizer.bypassSecurityTrustResourceUrl(`${this.image}`) : '';
    this._borderRadius = this.type === 'circle' ? '50%' : '0';
    this._height = `${this.size}px`;
    this._width = this.type === 'circle' ? `${this.size}px` : 'auto';
  }

  uploadImage(upload) {
    const file = upload.target.files[0];

    if (upload.target.files && file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this._image = e.target.result;
        this.ref.detectChanges();
        this.uploaded.emit(file);
      };
    }
  }
}
