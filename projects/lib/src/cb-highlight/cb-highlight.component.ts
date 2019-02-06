import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Renderer2,
  ViewChild,
  Inject,
  ElementRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MediaObserver } from '@angular/flex-layout';

/**
* Component `<cb-highlight>` to provide a highlight to features in your app.
*/
@Component({
  selector: 'cb-highlight',
  template: `
    <ng-container *ngTemplateOutlet="button"></ng-container>

    <div class="dialog dialog--{{ position }}" [ngClass]="{ 'dialog--active': active }" role="dialog" #dialog>
      <ng-container *ngTemplateOutlet="button"></ng-container>

      <div class="dialog-main">
        <button class="dialog-close" role="button" (click)="onHidden($event)">✕</button>
        <header class="dialog-header">
          <ng-content select="cb-highlight-header"></ng-content>
        </header>
        <section class="dialog-content">
          <ng-content select="cb-highlight-content"></ng-content>
        </section>
      </div>
    </div>

    <ng-template #button>
      <button class="button" role="button" [attr.aria-label]="ariaLabel" (click)="onToggle($event)"></button>
    </ng-template>
  `,
  styleUrls: ['./cb-highlight.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-highlight',
    '(document:click)': 'onHidden($event)',
    '(window:resize)': 'onResize($event)'
  }
})
export class CbHighlightComponent {
  @Input() active = false;
  @Input() ariaLabel = 'View highlight';
  @Input() position: 'left' | 'right' = 'right';

  @ViewChild('dialog') dialog: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private mediaObserver: MediaObserver,
    private ref: ElementRef,
    private renderer: Renderer2
  ) {}

  onToggle(event: any) {
    event.stopPropagation();
    const pos = this.ref.nativeElement.getBoundingClientRect();

    this.active = !this.active;
    this.renderer.appendChild(this.document.body, this.dialog.nativeElement);
    this.getPos(pos);

    if (!this.active) this.onHidden(event);
  }

  onHidden(event: any) {
    event.stopPropagation();
    this.active = false;
    this.renderer.appendChild(this.ref.nativeElement, this.dialog.nativeElement);
  }

  onResize() {
    const pos = this.ref.nativeElement.getBoundingClientRect();
    this.getPos(pos);
  }

  getPos(pos: any) {
    this.renderer.setStyle(this.dialog.nativeElement, 'top', `${pos.top + window.scrollY}px`);
    this.renderer.setStyle(this.dialog.nativeElement, 'left', `${pos.left}px`);

    this.mediaObserver.media$.subscribe(screen => {
      const dialogMain = this.dialog.nativeElement.querySelector('.dialog-main');
      if (screen.mqAlias === 'xs') this.renderer.setStyle(dialogMain, 'left', `-${pos.left}px`);
    });
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
