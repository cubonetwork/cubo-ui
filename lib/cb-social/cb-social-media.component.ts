import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';


/**
 * Component `<cb-social-median>` to make a share action
 * @param socialMedia Social media's name
 */
@Component({
  selector: 'cb-social-media',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./cb-social-media.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'role': 'button'
  }
})
export class CbSocialMediaComponent {}
