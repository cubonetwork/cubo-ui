import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

/**
 * Component `<cb-upload-image>` to make a share action
 */
@Component({
  selector: 'cb-upload-image',
  template: `
    <div class="upload">
      <label class="upload__button">
        <input class="upload__input" type="file">
        {{ label }}
      </label>
    </div>
    <div class="preview"></div>
  `,
  styleUrls: ['./cb-upload-image.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-upload-image'
  }
})
export class CbUploadImageComponent {
  @Input() label = 'Upload image';
}
