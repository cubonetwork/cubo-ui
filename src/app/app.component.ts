import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core'

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
  template: `
    <header class="header">
      <a class="header__logo" routerLink="/">
        cubo<span class="header__logo--color-1">u</span><span class="header__logo--color-2">i</span>
      </a>
    </header>
    <main class="main">
      <div class="container">
        <nav class="navbar">
          <mat-nav-list class="nav-list">
            <a mat-list-item routerLink="/components/avatar" [routerLinkActive]="['navbar--active']" [routerLinkActiveOptions]="{exact: true}">Avatar</a>
            <mat-divider></mat-divider>
            <a mat-list-item>Card</a>
            <mat-divider></mat-divider>
            <a mat-list-item>Social</a>
          </mat-nav-list>
        </nav>
        <article class="content">
          <router-outlet></router-outlet>
        </article>
      </div>
    </main>
  `
})
export class AppComponent { }
