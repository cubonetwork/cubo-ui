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
    <ng-content></ng-content>
  `,
  styleUrls: ['./cb-upload-image.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-upload-image',
    'role': 'button'
  }
})
export class CbUploadImageComponent {}
