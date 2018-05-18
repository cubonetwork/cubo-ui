import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'cb-card',
  template: `
    <div class="content">
      <ng-content></ng-content>
    </div>
    <ng-content select="cb-card-footer"></ng-content>
  `,
  styleUrls: ['./cb-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-card',
    '[class.cb-card--small]': 'size ===  "small"'
  }
})
export class CbCardComponent {
  @Input() size: string;
}

@Component({
  selector: 'cb-card-footer',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-card-footer',
    '[class.cb-card-footer--border]': 'border ===  true'
  }
})
export class CbCardFooterComponent {
  @Input() border = true;
}

@Component({
  selector: 'cb-card-title, [cbCardTitle]',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-title.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-card-title' }
})
export class CbCardTitleComponent {
  @Input() size: string;
}

@Component({
  selector: 'cb-card-subtitle, [cbCardSubtitle]',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-subtitle.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-card-subtitle' }
})
export class CbCardSubtitleComponent { }

@Component({
  selector: 'cb-card-pretitle, [cbCardPretitle]',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-pretitle.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-card-pretitle' }
})
export class CbCardPretitleComponent {
  @Input() size: string;
}

@Component({
  selector: 'cb-card-image',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-image.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-card-image' }
})
export class CbCardImageComponent { }
