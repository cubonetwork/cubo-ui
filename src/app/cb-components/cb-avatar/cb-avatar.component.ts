import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';

/**
* Component `<cb-avatar>` to create a avatar
* @param imageUrl Url of image
* @param imageAlt Alt of image
* @param type Avatar's type (circle / square)
* @param size Avatar's size (xsmall, small, medium, large, xlarge)
* @param lazyload Enable or disable the lazyload
*/
@Component({
  // moduleId: module.id,
  selector: 'cb-avatar',
  template: `
  <img class="avatar" src="{{imageUrl}}" alt="{{imageAlt}}" *ngIf="imageUrl">
  <span class="initials" *ngIf="!imageUrl">{{letters}}</span>
  <ng-content></ng-content>
  `,
  styleUrls: ['./cb-avatar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
  host: {
    '[class.-extra-small]': 'size ===  "xsmall"',
    '[class.-small]': 'size ===  "small"',
    '[class.-medium]': 'size ===  "medium"',
    '[class.-large]': 'size ===  "large"',
    '[class.-extra-large]': 'size ===  "xlarge"',
    '[class.-square]': 'type ===  "square"'
  }
})
export class CbAvatarComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() imageAlt: string;
  @Input() name: string;
  @Input() size = 'large';
  @Input() type = 'circle';

  nameSplit: Array<String>;
  letters: String;

  getInitials() {
    this.nameSplit = this.name.split(' ');
  }

  ngOnInit() {
    if (this.name) {
      this.nameSplit = this.name.split(' ');
      this.letters = this.nameSplit[0].charAt(0).toUpperCase() + this.nameSplit[1].charAt(0).toUpperCase();
    }
  }
}
