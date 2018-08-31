import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';

/**
* Component `<cb-chip>` to create a chip
* @param image Url of chip
*/
@Component({
  selector: 'cb-chip',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./cb-chip.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
  }
})
export class CbChipComponent implements OnInit {
  @Input() image: string;

  ngOnInit() {
  }
}
