import { MatChipsModule, MatIconRegistry } from '@angular/material';
import { Component } from '@angular/core';
import codeCardExample from './page-card-code-example.js';
import * as hljs from 'highlight.js';
import { DomSanitizer } from '@angular/platform-browser';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-card-component'
})
export class PageCardComponent {}

@Component({
  selector: 'page-card-description',
  template: `
    <p><code>cb-card</code> is a content container for text, photos, chips in the context of a single subject.</p>
    <h2>Basic card</h2>
    <p>The most basic card needs only a <code>cb-card</code> element with some content. However, it provides a number of preset sections that you can use inside of a cb-card.</p>
    <table>
      <tbody>
      <tr>
        <th>Element</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>cb-card-title</td>
        <td>Card title</td>
      </tr>
      <tr>
        <td>cb-card-subtitle</td>
        <td>Card subtitle</td>
      </tr>
      <tr>
        <td>cb-card-badges</td>
        <td>Card badges, intended to receive chips</td>
      </tr>
      <tr>
        <td>cb-card-footer</td>
        <td>Section anchored to the bottom of the card</td>
      </tr>
      </tbody>
    </table>
    <h2>Example</h2>

    <div style="display: flex; justify-content: space-between; max-width: 34rem; margin-left: 3.4rem; margin-bottom: 2.4rem">
      <div style="width: 16rem;">
        <cb-card [size]="'small'">
          <cb-card-image>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Beatles_logo.svg/2000px-Beatles_logo.svg.png" alt="Beatles">
          </cb-card-image>
          <cb-card-footer [border]="false">
            <cb-card-title>Beatles</cb-card-title>
            <cb-card-pretitle>Band</cb-card-pretitle>
          </cb-card-footer>
        </cb-card>
      </div>
      <div style="width: 16rem;">
        <cb-card [size]="'small'">
          <cb-card-image>
            <img src="http://famfonts.com/wp-content/uploads/guns-n-roses-wide.png" alt="Beatles">
          </cb-card-image>
          <cb-card-footer [border]="false">
            <cb-card-title>Guns N' Roses</cb-card-title>
            <cb-card-pretitle>Band</cb-card-pretitle>
          </cb-card-footer>
        </cb-card>
      </div>
    </div>

    <div style="max-width: 34rem; margin-left: 3.4rem; margin-bottom: 2.4rem">
      <cb-card>
        <cb-avatar [image]="'https://bit.ly/2vvFXCO'"></cb-avatar>
        <cb-card-title>Eleven</cb-card-title>
        <cb-card-subtitle>Character @ Stranger Things</cb-card-subtitle>
        <mat-chip-list style="position: absolute; left: 1.6rem; top: 1.6rem;">
          <mat-chip color="primary" selected="true">Hero</mat-chip>
        </mat-chip-list>
        <cb-card-footer>
          <div class="social">
            <cb-social>
              <mat-icon svgIcon="linkedin"></mat-icon>
            </cb-social>
            <cb-social>
              <mat-icon svgIcon="github"></mat-icon>
            </cb-social>
            <cb-social>
              <mat-icon svgIcon="twitter"></mat-icon>
            </cb-social>
            <cb-social>
              <mat-icon svgIcon="instagram"></mat-icon>
            </cb-social>
          </div>
          <div class="actions">
            <button mat-button color="primary">Click me!</button>
          </div>
        </cb-card-footer>
      </cb-card>
    </div>
  `
})
export class PageCardDescriptionComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    ),
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    ),
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg')
    ),
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
  }
}

@Component({
  selector: 'page-card-code-html',
  template: `
    <code [innerHtml]='html_content'></code>
  `
})
export class PageCardCodeHtmlComponent {
  html_content = hljs.highlightAuto(codeCardExample.html, languages).value;
}

@Component({
  selector: 'page-card-code-css',
  template: `
    <code [innerHtml]='css_content'></code>
  `
})
export class PageCardCodeCssComponent {
  css_content = hljs.highlightAuto(codeCardExample.css, languages).value;
}

@Component({
  selector: 'page-card-code-ts',
  template: `
    <code [innerHtml]='ts_content'></code>
  `
})
export class PageCardCodeTsComponent {
  ts_content = hljs.highlightAuto(codeCardExample.ts, languages).value;
}

@Component({
  selector: 'page-card-api',
  template: `
    <h1>API reference</h1>

    <div>
      <pre><code [innerHtml]='import_content'></code></pre>
    </div>

    <h2>Directives</h2>

    <p>
      <span>Selector: </span>
      <code>cb-card</code>
    </p>
    <p>
      <span>Exported as: </span>
      <code>CbCard</code>
    </p>
  `
})
export class PageCardApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbCardModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbCardModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
}
