import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <button class="button-mobile" (click)="toggleMenu($event)" fxShow.xs="true" fxShow.gt-sm="false">
      <ng-container *ngIf="!showMenu">Menu</ng-container>
      <ng-container *ngIf="showMenu">Close</ng-container>
    </button>

    <nav class="navbar" [ngClass.sm]="{'-in': showMenu}">
      <mat-nav-list class="nav-list">
        <ng-container *ngFor="let item of menu">
          <a mat-list-item routerLink="/components/{{item.path}}" [routerLinkActive]="['-item-active']" [routerLinkActiveOptions]="{exact: true}">{{item.name}}</a>
          <mat-divider></mat-divider>
        </ng-container>
      </mat-nav-list>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() menu = [];
  showMenu = false;

  toggleMenu(event) {
    event.stopPropagation();
    this.showMenu = !this.showMenu;
  }
}
