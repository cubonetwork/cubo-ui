import { Component } from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import social from './social.js';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  selector: 'page-social-component',
  template: ``
})
export class PageSocialComponent { }

@Component({
  selector: 'page-social-description',
  template: `
  <p>cb-social makes it easier to integrate icons from social media.</p>
  <h2>Select Social Media</h2>
  <p>It is possible to add the social media icons trough the MatIconRegistry module.</p>
  <h2>Themings</h2>
  <p>The default color for all the items is gray, it changes to the original social media color when the user hovers the icon.</p>
  <h2>Social Media Examples</h2>
  <cb-social>
    <mat-icon svgIcon="linkedin"></mat-icon>
    <mat-icon svgIcon="github"></mat-icon>
    <mat-icon svgIcon="twitter"></mat-icon>
    <mat-icon svgIcon="instagram"></mat-icon>
  </cb-social>
  `,
})
export class PageSocialDescriptionComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
  }
}

@Component({
  selector: 'page-social-code-html',
  template: `
    <code [innerHtml]="html_content"></code>
  `,
})
export class PageSocialCodeHtmlComponent {
  html_content = hljs.highlightAuto(social.html, languages).value;
}

@Component({
  selector: 'page-social-code-css',
  template: `
    <code [innerHtml]="css_content"></code>
  `,
})
export class PageSocialCodeCssComponent {
  css_content = hljs.highlightAuto(social.css, languages).value;
}

@Component({
  selector: 'page-social-code-ts',
  template: `
    <code [innerHtml]="ts_content"></code>
  `,
})
export class PageSocialCodeTsComponent {
  ts_content = hljs.highlightAuto(social.ts, languages).value;
}

@Component({
  selector: 'page-social-render',
  template: ``,
})
export class PageSocialRenderComponent {
 }

@Component({
  selector: 'page-social-api',
  template: `
    <h2>
      API reference for Social
    </h2>
    <div>
      <code [innerHtml]="import_content"></code>
    </div>
    <h2>
      Directives
    </h2>
    <h3>
      CbSocial
    </h3>
    <p>A cubo social  component</p>
    <p>
      <span>Selector: </span>
      <code>cb-social</code>
    </p>
    <p>
      <span>Exported as: </span>
      <code>CbSocial</code>
    </p>
  `
})
export class PageSocialApiComponent {
  import_content = hljs.highlightAuto(`import { CbSocialModule } from '@cubo/cb-social.module';`, ['nohighlight']).value;
 }
