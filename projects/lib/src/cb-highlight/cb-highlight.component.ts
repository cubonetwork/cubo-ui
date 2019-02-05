import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

/**
* Component `<cb-highlight>` to provide a highligth to features in your app.
*/
@Component({
  selector: 'cb-highlight',
  template: `
    <button class="button" role="button" [attr.aria-label]="ariaLabel"></button>

    <aside class="dialog" role="dialog">
      <button class="dialog-close" role="button">✕</button>
      <ng-content></ng-content>
    </aside>
  `,
  styleUrls: ['./cb-highlight.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-highlight'
  }
})
export class CbHighlightComponent {
  @Input() ariaLabel = 'View highligth';
}
