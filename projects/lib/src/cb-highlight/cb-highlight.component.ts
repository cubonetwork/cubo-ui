import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

/**
* Component `<cb-highlight>` to provide a highlight to features in your app.
*/
@Component({
  selector: 'cb-highlight',
  template: `
    <button class="button" role="button" [attr.aria-label]="ariaLabel"></button>

    <aside class="dialog" role="dialog">
      <button class="dialog-close" role="button">✕</button>
      <header class="dialog-header">
        <ng-content select="cb-highlight-header"></ng-content>
      </header>
      <section class="dialog-content">
        <ng-content select="cb-highlight-content"></ng-content>
      </section>
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
  @Input() ariaLabel = 'View highlight';
}

/**
* Component `<cb-highlight-header>` to create a header to highlight
*/
@Component({
  selector: 'cb-highlight-header',
  styleUrls: ['./cb-highlight-header.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-highlight-header'
  }
})
export class CbHighlithHeaderComponent { }

/**
* Component `<cb-highlight-content>` to create a content to highlight
*/
@Component({
  selector: 'cb-highlight-content',
  styleUrls: ['./cb-highlight-content.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-highlight-content'
  }
})
export class CbHighlithContentComponent { }
