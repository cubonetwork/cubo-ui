import { MatChipsModule, MatIconRegistry } from '@angular/material';
import { Component } from '@angular/core';
import card from './card.js';
import * as hljs from 'highlight.js';
import { DomSanitizer } from '@angular/platform-browser';
const languages = ['html', 'typescript', 'css'];

@Component({
  selector: 'page-card-component',
  template: ``
})
export class PageCardComponent { }

@Component({
  selector: 'page-card-description',
  template: `
    <p>cb-card is a content container for text, photos, chips in the context of a single subject.</p>
    <h2>Basic card sections</h2>
    <p>The most basic card needs only an cb-card element with some content. However, it provides a number of preset sections that you can use inside of a cb-card</p>
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
    <h2>Card</h2>
    <cb-card>
      <cb-card-title>Card with title</cb-card-title>
      <cb-card-subtitle>Card with subtitle</cb-card-subtitle>
      <cb-avatar [imageUrl]="'https://bit.ly/2vvFXCO'"></cb-avatar>
      <cb-card-badges>
        <mat-chip-list>
          <mat-chip color="primary" selected="true">Primary</mat-chip>
        </mat-chip-list>
      </cb-card-badges>
      <cb-card-footer>
        <cb-social>
          <mat-icon svgIcon="linkedin"></mat-icon>
          <mat-icon svgIcon="github"></mat-icon>
          <mat-icon svgIcon="twitter"></mat-icon>
          <mat-icon svgIcon="instagram"></mat-icon>
        </cb-social>
      </cb-card-footer>
    </cb-card>
  `,
})
export class PageCardDescriptionComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
  }
 }

@Component({
  selector: 'page-card-code-html',
  template: `
    <code [innerHtml]="html_content"></code>
  `,
})
export class PageCardCodeHtmlComponent {
  html_content = hljs.highlightAuto(card.html, languages).value;
}

@Component({
  selector: 'page-card-code-css',
  template: `
    <code [innerHtml]="css_content"></code>
  `,
})
export class PageCardCodeCssComponent {
  css_content = hljs.highlightAuto(card.css, languages).value;
}

@Component({
  selector: 'page-card-code-ts',
  template: `
    <code [innerHtml]="ts_content"></code>
  `,
})
export class PageCardCodeTsComponent {
  ts_content = hljs.highlightAuto(card.ts, languages).value;
}

@Component({
  selector: 'page-card-render',
  template: `
    <cb-card>
      <cb-card-title>Simple card</cb-card-title>
    </cb-card>
  `,
})
export class PageCardRenderComponent { }

@Component({
  selector: 'page-card-api',
  template: `
    <h2>
      API reference for Cubo Card
    </h2>
    <div>
      <code [innerHtml]="import_content"></code>
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
  import_content = hljs.highlightAuto(`import { CbCardModule } from '@cubo/cb-card.module';`, ['nohighlight']).value;
 }
