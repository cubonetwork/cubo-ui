const MenuCodeExample = {
  html: `
  <cb-menu role="navigation" [position]="'bottom right'" [backdrop]="false">
    <cb-menu-button>
      <button mat-fab color="primary">Menu</button>
    </cb-menu-button>
    <cb-menu-content>
      <cb-menu-item>
        <button mat-fab style="background: darkorange">C</button>
      </cb-menu-item>
      <cb-menu-item>
        <button mat-fab style="background: cornflowerblue; color: white">U</button>
      </cb-menu-item>
      <cb-menu-item>
        <button mat-fab style="background: darkorange">B</button>
      </cb-menu-item>
      <cb-menu-item>
        <button mat-fab style="background: green">O</button>
      </cb-menu-item>
    </cb-menu-content>
  </cb-menu>
  `,
  ts: `
  import {Component} from '@angular/core';

  @Component({
    selector: 'menu-example',
    templateUrl: 'menu-example.html',
    styleUrls: ['menu-example.css']
  })
  export class MenuExample { }
  `,
  css: `
  /** No CSS for this example */
  `
};

module.exports = MenuCodeExample;
