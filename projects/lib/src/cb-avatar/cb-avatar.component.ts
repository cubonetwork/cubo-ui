import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef, Renderer2 } from '@angular/core';

/**
* Component `<cb-avatar>` to create a avatar
* @param image Url of avatar
* @param name Name of avatar
* @param size Avatar's size (xsmall / small / medium / large / xlarge)
*/
@Component({
  selector: 'cb-avatar',
  template: `
  <img class="avatar" [src]="image" [alt]="name" *ngIf="image; else noImage">
  <ng-template #noImage>
    <span class="initials">{{ letters }}</span>
  </ng-template>
  <ng-content></ng-content>
  `,
  styleUrls: ['./cb-avatar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-avatar'
  }
})
export class CbAvatarComponent {
  nameSplit: Array<string>;
  letters: string;

  @Input() image: string;

  @Input() set name(name: string) {
    if (name) {
      this.nameSplit = name.split(' ');
      this.nameSplit[1]
        ? this.letters = this.nameSplit[0].charAt(0).toUpperCase() + this.nameSplit[1].charAt(0).toUpperCase()
        : this.letters = this.nameSplit[0].charAt(0).toUpperCase();
    }
  }

  @Input() set size(size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge') {
    this.renderer.addClass(this.ref.nativeElement, `avatar--${size}`);
  }

  constructor(
    private ref: ElementRef,
    private renderer: Renderer2) {}
}
