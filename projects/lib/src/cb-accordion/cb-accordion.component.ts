import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

/**
* Component `<cb-accordion>` to create a accordion component
* @param {title} title Set title to accordion
* @param {boolean} isOpened Set if accordion is opened or not
* @param {Emitter} opened Output when accordion opened or nor
*/
@Component({
  selector: 'cb-accordion',
  template: `
    <header class="header" (click)="openCbAccordion()">
      <span class="title" *ngIf="title">{{ title }}</span>
      <span class="arrow" [ngClass]="{ 'arrow--closed': isOpened }" aria-hidden="true"></span>
    </header>
    <section class="content" *ngIf="isOpened">
      <ng-content></ng-content>
    </section>
  `,
  styleUrls: ['./cb-accordion.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class CbAccordionComponent {
  @Input() isOpened = false;
  @Input() title: string;

  @Output() opened = new EventEmitter(false);

  openCbAccordion() {
    this.isOpened = !this.isOpened;
    this.opened.emit(this.isOpened);
  }
}
