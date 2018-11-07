import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

/**
* Component `<cb-avatar>` to create a avatar
* @param image Url of avatar
* @param name Name of avatar
* @param size Avatar's size (xsmall / small / medium / large / xlarge)
*/
@Component({
  selector: 'cb-avatar',
  template: `
  <img class="avatar" lazyimage [defaultImage]="defaultImage" [lazyLoad]="image" [offset]="50" alt="{{name}}" *ngIf="image">
  <span class="initials" *ngIf="!image">{{ letters }}</span>
  <ng-content></ng-content>
  `,
  styleUrls: ['./cb-avatar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-avatar',
    '[class.avatar--extra-small]': 'size ===  "xsmall"',
    '[class.avatar--small]': 'size ===  "small"',
    '[class.avatar--medium]': 'size ===  "medium"',
    '[class.avatar--large]': 'size ===  "large"',
    '[class.avatar--extra-large]': 'size ===  "xlarge"'
  }
})
export class CbAvatarComponent {
  @Input() image: string;
  @Input() size = 'large';
  defaultImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  nameSplit: Array<string>;
  letters: string;

  @Input() set name(name: string) {
    this.nameSplit = name.split(' ');
    this.nameSplit[1]
      ? this.letters = this.nameSplit[0].charAt(0).toUpperCase() + this.nameSplit[1].charAt(0).toUpperCase()
      : this.letters = this.nameSplit[0].charAt(0).toUpperCase();
  }
}
