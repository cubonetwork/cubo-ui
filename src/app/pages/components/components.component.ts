import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'page-components',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./components.component.scss'],
  templateUrl: './components.component.html'
})
export class PageComponentsComponent { }
