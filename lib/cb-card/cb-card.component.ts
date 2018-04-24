import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'cb-card',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./cb-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CbCardComponent { }

@Component({
  selector: 'cb-card-footer',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
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
  host: { 'class': 'title' }
})
export class CbCardTitleComponent { }

@Component({
  selector: 'cb-card-subtitle, [cbCardSubtitle]',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-subtitle.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'subtitle' }
})
export class CbCardSubtitleComponent { }

@Component({
  selector: 'cb-card-badges',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-badges.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CbCardBadgesComponent { }
