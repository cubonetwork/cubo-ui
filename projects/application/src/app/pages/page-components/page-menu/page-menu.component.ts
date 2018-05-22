import { Component } from '@angular/core';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-menu-component'
})
export class PageMenuComponent {}

@Component({
  selector: 'page-menu-example',
  templateUrl: 'page-menu-example.html'
})
export class PageMenuExampleComponent {
  codeHtml = hljs.highlightAuto(`
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
  </cb-menu>`, languages).value;

  codeTs = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  @Component({
    selector: 'menu-example',
    templateUrl: 'menu-example.html',
    styleUrls: ['menu-example.css']
  })
  export class MenuExample { }
  `, languages).value;

  codeCss = hljs.highlightAuto(`
  /** No CSS for this example */
  `, languages).value;
}

@Component({
  selector: 'page-menu-api',
  templateUrl: 'page-menu-api.html'
})
export class PageMenuApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbMenuModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbMenuModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
}
