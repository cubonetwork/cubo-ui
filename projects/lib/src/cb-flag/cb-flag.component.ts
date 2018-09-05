import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

/**
 * Component `<cb-flag>` to make a share action
 */
@Component({
  selector: 'cb-flag',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./cb-flag.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-flag'
  }
})
export class CbFlagComponent {}
