import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Renderer2, ElementRef } from '@angular/core';

/**
* Component `<cb-chip>` to create a chip
* @param bg Set if bg is true or false
* @param icon Set icon to chip
* @param color Select color of chip (blue, orange, green, gray-light)
* @param size Select size of chip (small or large)
*/
@Component({
  selector: 'cb-chip',
  template: `
    <mat-icon class="icon" svgIcon="{{icon}}" *ngIf="icon"></mat-icon>
    <div class="content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./cb-chip.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-chip',
    '[class.chip--bg]': 'bg',
    '[class.chip--icon]': 'icon'
  }
})
export class CbChipComponent {
  @Input() bg = false;
  @Input() icon: string;

  @Input() set size(size: 'small' | 'medium' | 'large') {
    this.renderer.addClass(this.ref.nativeElement, `chip--size-${size}`);
  }

  @Input() set color(color: 'red' | 'blue' | 'green' | 'gray-light' | 'gray-lighter' | 'orange' | 'purple' | 'platinum' | 'gold' | 'silver' | 'bronze') {
    this.renderer.addClass(this.ref.nativeElement, `chip--color-${color}`);
  }

  constructor(
    private ref: ElementRef,
    private renderer: Renderer2) {}
}

/**
* Component `<cb-chip-list>` to be a holder of `<cb-chip>`
* @param direction Set direction of list
*/
@Component({
  selector: 'cb-chip-list',
  template: `
    <ng-content select="cb-chip"></ng-content>
  `,
  styleUrls: ['./cb-chip-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.list--h]': 'direction === "horizontal"',
    '[class.list--v]': 'direction === "vertical"'
  }
})
export class CbChipListComponent {
  @Input() direction = 'horizontal';
}
