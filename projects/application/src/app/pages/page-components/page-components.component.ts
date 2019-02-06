import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'page-components',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./page-components.component.scss'],
  templateUrl: './page-components.component.html'
})
export class PageComponentsComponent {
  menu = [
    {
      'path': 'avatar',
      'name': 'Avatar'
    },
    {
      'path': 'carousel',
      'name': 'Carousel'
    },
    {
      'path': 'card',
      'name': 'Card'
    },
    {
      'path': 'chip',
      'name': 'Chip'
    },
    {
      'path': 'flag',
      'name': 'Flag'
    },
    {
      'path': 'highlight',
      'name': 'Highlight'
    },
    {
      'path': 'menu',
      'name': 'Menu'
    },
    {
      'path': 'social',
      'name': 'Social'
    },
    {
      'path': 'upload-image',
      'name': 'Upload image'
    },
  ];
}
