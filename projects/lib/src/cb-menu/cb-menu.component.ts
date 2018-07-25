import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

/**
* Component `<cb-menu>` to floating menu based on material ui
* @param backdrop Enable or disable backdrop (Default is true)
* @param position Set menu position ('top left' / 'top right'
* / 'bottom left' / 'bottom right')
*/
@Component({
  selector: 'cb-menu, [cbMenu]',
  template: `
    <div class="button" (click)="toggleMenu($event)">
      <ng-content select="cb-menu-button"></ng-content>
    </div>
    <ng-content select="cb-menu-content"></ng-content>
  `,
  styleUrls: ['./cb-menu.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-menu',
    '(document:click)': 'hiddenMenu($event)',
    '[class.menu--backdrop]': 'backdrop === true',
    '[class.menu--active]': 'active === true',
    '[class.menu--top-left]': 'position === "top left"',
    '[class.menu--top-right]': 'position === "top right"',
    '[class.menu--bottom-left]': 'position === "bottom left"',
    '[class.menu--bottom-right]': 'position === "bottom right"'
  }
})
export class CbMenuComponent {
  @Input() position = 'top left';
  @Input() backdrop = true;
  active = false;

  constructor(private ref: ChangeDetectorRef) {}

  toggleMenu(event) {
    this.ref.detectChanges();
    event.stopPropagation();
    this.active = !this.active;
    this.ref.detectChanges();
  }

  hiddenMenu(event) {
    this.active = false;
  }
}

/**
* Component `<cb-menu-button>` to create a wrap to menu button
*/
@Component({
  selector: 'cb-menu-button',
  styleUrls: ['./cb-menu-button.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-menu-button'
  }
})
export class CbMenuButtonComponent { }

/**
* Component `<cb-menu-content>` to create a wrap to menu content
*/
@Component({
  selector: 'cb-menu-content',
  styleUrls: ['./cb-menu-content.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-menu-content' }
})
export class CbMenuContentComponent { }

/**
* Component `<cb-menu-item>` to create a floating menu item without
* theme style, to use together with `<cb-menu>`
*/
@Component({
  selector: 'cb-menu-item, [cbMenuItem]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./cb-menu-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-menu-item' }
})
export class CbMenuItemComponent { }

/**
* Component `<cb-menu-chip>` to create a menu item
* based on chips to material ui, it can to use without
* `<cb-menu>` or `<cb-menu-item>`
*/
@Component({
  selector: 'cb-menu-chip, [cbMenuChip]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./cb-menu-chip.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'cb-menu-chip' }
})
export class CbMenuChipComponent { }
