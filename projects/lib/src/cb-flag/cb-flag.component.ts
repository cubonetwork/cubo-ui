import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Renderer2,
  OnInit,
  ElementRef
} from '@angular/core';

/**
* Component `<cb-flag>` to create a flag
* @param icon Set the icon
* @param color Select color of flag (blue, orange, green)
* @param left Set left distante
* @param right Set right distante
*/
@Component({
  selector: 'cb-flag',
  template: `
    <mat-icon class="icon" svgIcon="{{icon}}"></mat-icon>
  `,
  styleUrls: ['./cb-flag.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-flag',
    '[style.left.px]': 'left',
    '[style.right.px]': 'right',
    '[class.flag--position]': 'left || right'
  }
})
export class CbFlagComponent implements OnInit {
  @Input() icon: string;
  @Input() left: number;
  @Input() right: number;

  @Input() set color(color: 'blue' | 'green' | 'orange') {
    this.renderer.addClass(this.ref.nativeElement, `flag--color-${color}`);
  }

  constructor(
    private ref: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    if (this.left || this.right) {
      this.renderer.setStyle(
        this.ref.nativeElement.parentElement, 'position', 'relative');
    }
  }
}
