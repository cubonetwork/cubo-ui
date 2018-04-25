import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
  `,
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent { }
