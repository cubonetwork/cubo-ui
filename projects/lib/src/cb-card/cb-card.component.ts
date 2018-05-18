import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'cb-card',
  template: `
    <ng-content></ng-content>
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
  host: { 'class': 'cb-card-footer' }
})
export class CbCardFooterComponent { }

@Component({
  selector: 'cb-card-title, [cbCardTitle]',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-title.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-card-title',
    '[class.cb-card-title--small]': 'size ===  "small"'
  }
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
  styleUrls: ['./cb-card-subtitle.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-card-pretitle',
    '[class.cb-card-pretitle--small]': 'size ===  "small"'
  }
})
export class CbCardPretitleComponent {
  @Input() size: string;
}

@Component({
  selector: 'cb-card-badges',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-badges.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-card-badges' }
})
export class CbCardBadgesComponent { }
