const MenuCodeExample = {
  html: `
  <nav class="navigation">
    <button mat-fab color="primary" (click)="shouldShowMenu = !shouldShowMenu">Menu</button>
    <cb-menu role="navigation" [position]="'bottom right'" [active]="shouldShowMenu">
      <cb-menu-item>
        <cb-menu-chip style="background: darkorange">DARK ORANGE</cb-menu-chip>
      </cb-menu-item>
      <cb-menu-item>
        <cb-menu-chip style="background: cornflowerblue; color: white">CORN FLOWER BLUE</cb-menu-chip>
      </cb-menu-item>
      <cb-menu-item>
        <cb-menu-chip style="background: darkorange">DARK ORANGE</cb-menu-chip>
      </cb-menu-item>
      <cb-menu-item>
        <cb-menu-chip style="background: mediumspringgreen">MEDIUM SPRING GREEN</cb-menu-chip>
      </cb-menu-item>
    </cb-menu>
  </nav>
  `,
  ts: `
  import {Component} from '@angular/core';

  @Component({
    selector: 'menu-example',
    templateUrl: 'menu-example.html',
    styleUrls: ['menu-example.css']
  })
  export class MenuExample {
    shouldShowMenu = false;
  }
  `,
  css: `
  .navigation {
    position: relative;
  }
  `
};

module.exports = MenuCodeExample;
