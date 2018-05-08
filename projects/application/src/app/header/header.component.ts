import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <a class="logo" routerLink="/" role="logo">
        cubo<span class="logo--color-1">u</span><span class="logo--color-2">i</span>
      </a>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'role': 'banner'
  }
})
export class HeaderComponent { }
