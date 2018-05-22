import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

/**
* Component `<cb-card>` to create a card
* @param size Card's size (small)
* @param center Centralize card (true or false)
*
* Example:
* <cb-card>
*   <cb-card-image>
*     <img src="x" alt="x">
*   </cb-card-image>
*   <cb-card-pretitle>...</cb-card-pretitle>
*   <cb-card-title>...</cb-card-title>
*   <cb-card-info>...</cb-card-info>
*   <cb-card-footer>
*   ...
*   </cb-card-footer>
* </cb-card>
*/
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
    '[class.cb-card--small]': 'size ===  "small"',
    '[class.cb-card--center]': 'center ===  true'
  }
})
export class CbCardComponent {
  @Input() size: string;
  @Input() center = false;
}

/**
* Component `<cb-card-footer>` to create a card footer
* @param border Activate border (true or false)
*
* Example:
* <cb-card-footer>...</cb-card-footer>
*/
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

/**
* Component `<cb-card-title>` to create a card title
*
* Example:
* <cb-card-title>...</cb-card-title>
*/
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

/**
* Component `<cb-card-info>` to create a card info
*
* Example:
* <cb-card-info>...</cb-card-info>
*/
@Component({
  selector: 'cb-card-info, [cbCardInfo]',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-info.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-card-info' }
})
export class CbCardInfoComponent { }

/**
* Component `<cb-card-pretitle>` to create a card pretitle
*
* Example:
* <cb-card-pretitle>...</cb-card-pretitle>
*/
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
export class CbCardPretitleComponent { }

/**
* Component `<cb-card-description>` to create a card description
*
* Example:
* <cb-card-description>...</cb-card-description>
*/
@Component({
  selector: 'cb-card-description, [cbCardDescription]',
  template: `
    <ng-content></ng-content>
	`,
  styleUrls: ['./cb-card-description.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-card-description' }
})
export class CbCardDescriptionComponent { }

/**
* Component `<cb-card-image>` to create a card image
*
* Example:
* <cb-card-image>
*   <img src="x" alt="x">
* </cb-card-image>
*/
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
