import { Component } from '@angular/core';
import MenuCodeExample from './page-menu-code-example.js';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-menu-component'
})
export class PageMenuComponent {}

@Component({
  selector: 'page-menu-description',
  template: `
    <p><em>cb-menu</em> makes it use to create a floating menu based on material ui. The main objective is be a holder with animations, it doesn't have template style and the propose is use with any element.</p>

    <h3>Menu chip</h3>

    <p><em>cb-menu-chip</em> can be use inside others components, without <em>cb-menu</em> or  <em>cb-menu-item</em> dependency.</p>

    <div>
      <cb-menu-chip style="background: cyan">Menu chip example</cb-menu-chip>
    </div>

    <h2>Examples</h2>

    <h3>Opening to bottom right</h3>
    <div style="height: 250px;">
      <cb-menu role="navigation" [position]="'bottom right'">
        <cb-menu-button>
          <button mat-fab color="primary">Menu</button>
        </cb-menu-button>
        <cb-menu-content>
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
        </cb-menu-content>
      </cb-menu>
    </div>

    <h3>Opening to bottom left</h3>
    <div style="height: 250px; display: flex; justify-content: flex-end; align-items: flex-start;">
      <cb-menu role="navigation" [position]="'bottom left'">
        <cb-menu-button>
          <button mat-fab color="primary">Menu</button>
        </cb-menu-button>
        <cb-menu-content>
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
        </cb-menu-content>
      </cb-menu>
    </div>

    <h3>Opening to top right</h3>
    <div style="height: 250px; display: flex; justify-content: flex-start; align-items: flex-end;">
      <cb-menu role="navigation" [position]="'top right'">
        <cb-menu-button>
          <button mat-fab color="primary">Menu</button>
        </cb-menu-button>
        <cb-menu-content>
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
        </cb-menu-content>
      </cb-menu>
    </div>

    <h3>Opening to top left</h3>
    <div style="height: 250px; display: flex; justify-content: flex-end; align-items: flex-end;">
      <cb-menu role="navigation" [position]="'top left'">
        <cb-menu-button>
          <button mat-fab color="primary">Menu</button>
        </cb-menu-button>
        <cb-menu-content>
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
        </cb-menu-content>
      </cb-menu>
    </div>

    <h3>Use with other component</h3>
    <div style="height: 250px;">
      <cb-menu role="navigation" [position]="'bottom right'">
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
    </div>
  `
})
export class PageMenuDescriptionComponent {
  shouldShowMenuBottomRight = false;
  shouldShowMenuBottomLeft = false;
  shouldShowMenuTopRight = false;
  shouldShowMenuTopLeft = false;
  shouldShowMenuOtherExample = false;
}

@Component({
  selector: 'page-menu-code-html',
  template: `
    <code [innerHtml]="html_content"></code>
  `
})
export class PageMenuCodeHtmlComponent {
  html_content = hljs.highlightAuto(MenuCodeExample.html, languages)
    .value;
}

@Component({
  selector: 'page-menu-code-css',
  template: `
    <code [innerHtml]="css_content"></code>
  `
})
export class PageMenuCodeCssComponent {
  css_content = hljs.highlightAuto(MenuCodeExample.css, languages).value;
}

@Component({
  selector: 'page-menu-code-ts',
  template: `
    <code [innerHtml]="ts_content"></code>
  `
})
export class PageMenuCodeTsComponent {
  ts_content = hljs.highlightAuto(MenuCodeExample.ts, languages).value;
}

@Component({
  selector: 'page-menu-api',
  template: `
  <div>
    <code [innerHtml]='import_content'></code>
  </div>
  <h2>Directives</h2>
  <h3>CbMenuComponent</h3>
  <p>
    <span>Selector: </span>
    <code>cb-menu</code>
  </p>
  `
})
export class PageMenuApiComponent {
  import_content = hljs.highlightAuto(`import { CbMenuModule } from 'cubo-ui';`, ['nohighlight']).value;
}
