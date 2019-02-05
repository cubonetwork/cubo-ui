import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

/**
* Component `<cb-highlight>` to provide a highligth to features in your app.
*/
@Component({
  selector: 'cb-highlight',
  template: `
    cb-highligth
  `,
  styleUrls: ['./cb-highlight.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-highlight'
  }
})
export class CbHighlightComponent {
}
