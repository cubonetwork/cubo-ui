import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';


/**
 * Component `<cb-social>` to make a share action
 */
@Component({
  selector: 'cb-social',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./cb-social.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'role': 'button'
  }
})
export class CbSocialComponent {}
