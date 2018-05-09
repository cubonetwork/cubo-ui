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
    <p>cb-card is a content container for text, photos, chips in the context of a single subject.</p>
    <h2>Basic card</h2>
    <p>The most basic card needs only a cb-card element with some content. However, it provides a number of preset sections that you can use inside of a cb-card.</p>
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
    <cb-card>
      <cb-avatar [imageUrl]="'https://bit.ly/2vvFXCO'"></cb-avatar>
      <cb-card-title>Eleven</cb-card-title>
      <cb-card-subtitle>Character @ Stranger Things</cb-card-subtitle>
      <cb-card-badges>
        <mat-chip-list>
          <mat-chip color="primary" selected="true">Hero</mat-chip>
          <mat-chip color="accent" selected="true">Superpower</mat-chip>
        </mat-chip-list>
      </cb-card-badges>
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
    <h2>
      API reference for Cubo Card
    </h2>
    <div>
      <code [innerHtml]='import_content'></code>
    </div>
    <h2>
      Directives
    </h2>
    <h3>
      CbCard
    </h3>
    <p>A cubo card component</p>
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
  import_content = hljs.highlightAuto(
    `import { CbCardModule } from 'cubo-ui';`,
    ['nohighlight']
  ).value;
}
