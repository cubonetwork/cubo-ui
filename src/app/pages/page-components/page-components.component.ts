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
      'path': 'card',
      'name': 'Card'
    },
    {
      'path': 'social',
      'name': 'Social'
    }
  ];
  showMenu = false;

  toggleMenu(event) {
    event.stopPropagation();
    this.showMenu = !this.showMenu;
  }
}
