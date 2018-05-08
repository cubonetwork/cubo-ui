import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cubo-ui',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header></app-header>
    <main class="main" role="main">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent { }
