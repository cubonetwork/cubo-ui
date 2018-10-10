import { Component } from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-social-component'
})
export class PageSocialComponent { }

@Component({
  selector: 'page-social-example',
  templateUrl: 'page-social-example.html'
})
export class PageSocialExampleComponent {
  codeHtml = hljs.highlightAuto(`
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
  </cb-social>`, languages).value;

  codeTs = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  /**
   * @title Basic social media
   */
  @Component({
    selector: 'social-overview-example',
    templateUrl: 'social-overview-example.html',
    styleUrls: ['social-overview-example.css']
  })
  export class SocialOverviewExample {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
      iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
      iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
      iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
      iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
    }
  }
  `, languages).value;

  codeCss = hljs.highlightAuto(`
  /** No CSS for this example */
  `, languages).value;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
  }
}

@Component({
  selector: 'page-social-api',
  templateUrl: 'page-social-api.html'
})
export class PageSocialApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbSocialModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbSocialModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
 }
