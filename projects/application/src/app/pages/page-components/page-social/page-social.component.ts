import { Component } from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import socialCodeExample from './page-social-code-example.js';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-social-component'
})
export class PageSocialComponent { }

@Component({
  selector: 'page-social-description',
  template: `
  <p>cb-social makes it easier to integrate icons from social media.</p>
  <h2>Select Social Media</h2>
  <p>It is possible to add the social media icons through the MatIconRegistry module, if you opt to use the MatIcon.</p>
  <p>In this example, we decided to use the icons from the MatIconModule, so to register then we used the MatIconRegistry module,
    but this is not mandatory, it is possible to user your own icons without the material library.</p>
  <h2>Themings</h2>
  <p>The default color for all the items is gray, it changes to the original social media color when the user hovers the icon.</p>
  <h2>Examples</h2>
  <div>
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
  html_content = hljs.highlightAuto(socialCodeExample.html, languages).value;
}

@Component({
  selector: 'page-social-code-css',
  template: `
    <code [innerHtml]="css_content"></code>
  `,
})
export class PageSocialCodeCssComponent {
  css_content = hljs.highlightAuto(socialCodeExample.css, languages).value;
}

@Component({
  selector: 'page-social-code-ts',
  template: `
    <code [innerHtml]="ts_content"></code>
  `,
})
export class PageSocialCodeTsComponent {
  ts_content = hljs.highlightAuto(socialCodeExample.ts, languages).value;
}

@Component({
  selector: 'page-social-api',
  template: `
    <h1>API reference</h1>

    <div>
      <pre><code [innerHtml]="import_content"></code></pre>
    </div>

    <h2>Directives</h2>

    <h3>CbSocial</h3>

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
  import_content = hljs.highlightAuto(`
  import { CbSocialModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbSocialModule
    ]
  })
  export class PageSocialModule { }
  `, ['nohighlight']).value;
 }
