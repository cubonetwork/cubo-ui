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
* @param color Select color of flag (blue, orange, green)
*/
@Component({
  selector: 'cb-flag',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./cb-flag.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'cb-flag',
    '[style.left.px]': 'left',
    '[style.right.px]': 'right',
    '[class.flag--position]': 'left || right',
    '[class.flag--color-blue]': 'color === "blue"',
    '[class.flag--color-green]': 'color === "green"',
    '[class.flag--color-orange]': 'color === "orange"'
  }
})
export class CbFlagComponent implements OnInit {
  @Input() color: string;
  @Input() left: number;
  @Input() right: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    if (this.left || this.right) {
      this.renderer.setStyle(
        this.el.nativeElement.parentElement, 'position', 'relative');
    }
  }
}
