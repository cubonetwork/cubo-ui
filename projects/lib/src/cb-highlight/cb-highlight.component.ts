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
    <button class="button" role="button" [attr.aria-label]="ariaLabel" (click)="onToggle($event)"></button>

    <aside class="dialog" role="dialog">
      <button class="dialog-close" role="button" (click)="onHidden($event)">✕</button>
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
    'class': 'cb-highlight',
    '(document:click)': 'onHidden($event)',
    '[class.highlight--active]': 'active === true',
    '[class.highlight--left]': 'position === "left"',
    '[class.highlight--right]': 'position === "right"'
  }
})
export class CbHighlightComponent {
  @Input() active = false;
  @Input() ariaLabel = 'View highlight';
  @Input() position: 'left' | 'right' = 'right';

  onToggle(event: any) {
    event.stopPropagation();
    this.active = !this.active;
  }

  onHidden(event: any) {
    event.stopPropagation();
    this.active = false;
  }
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
export class CbHighlihtHeaderComponent { }

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
export class CbHighlihtContentComponent {}
