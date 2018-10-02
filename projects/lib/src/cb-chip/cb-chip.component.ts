import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

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
    '[class.chip--icon]': 'icon',
    '[class.chip--color-blue]': 'color === "blue"',
    '[class.chip--color-green]': 'color === "green"',
    '[class.chip--color-gray-light]': 'color === "gray-light"',
    '[class.chip--color-gray-lighter]': 'color === "gray-lighter"',
    '[class.chip--color-orange]': 'color === "orange"',
    '[class.chip--color-purple]': 'color === "purple"',
    '[class.chip--color-platinum]': 'color === "platinum"',
    '[class.chip--color-gold]': 'color === "gold"',
    '[class.chip--size-small]': 'size === "small"',
    '[class.chip--size-medium]': 'size === "medium"',
    '[class.chip--size-large]': 'size === "large"'
  }
})
export class CbChipComponent {
  @Input() bg = false;
  @Input() color: string;
  @Input() icon: string;
  @Input() size = 'medium';
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
