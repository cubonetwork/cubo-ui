import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

/**
* Component `<cb-chip>` to create a chip
* @param uppercase Set if uppercase is true or false
* @param bg Set if bg is true or false
* @param icon Set icon to chip
* @param color Select color of chip
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
    '[class.cb-chip--uppercase]': 'uppercase',
    '[class.cb-chip--bg]': 'bg',
    '[class.cb-chip--icon]': 'icon',
    '[class.cb-chip--color-blue]': 'color === "blue"',
    '[class.cb-chip--color-green]': 'color === "green"',
    '[class.cb-chip--color-gray-light]': 'color === "gray-light"',
    '[class.cb-chip--color-orange]': 'color === "orange"'
  }
})
export class CbChipComponent {
  @Input() uppercase = false;
  @Input() bg = false;
  @Input() color: string;
  @Input() icon: string;
}

/**
* Component `<cb-chip-list>` to be a holder of `<cb-chip>`
* @param direction Set direction of list
*/
@Component({
  selector: 'cb-chip-list',
  template: `
    <div class="item">
      <ng-content select="cb-chip"></ng-content>
    </div>
  `,
  styleUrls: ['./cb-chip-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.cb-chip-list--h]': 'position === "horizontal"'
  }
})
export class CbChipListComponent {
  @Input() position = 'vertical';
}
