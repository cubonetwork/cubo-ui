import { Component } from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-upload-image-component'
})
export class PageUploadImageComponent { }

@Component({
  selector: 'page-upload-image-example',
  templateUrl: 'page-upload-image-example.html'
})
export class PageUploadImageExampleComponent {
  codeHtml = hljs.highlightAuto(`
  <cb-upload-image>
    <mat-icon svgIcon="linkedin"></mat-icon>
  </cb-upload-image>
  <cb-upload-image>
    <mat-icon svgIcon="github"></mat-icon>
  </cb-upload-image>
  <cb-upload-image>
    <mat-icon svgIcon="twitter"></mat-icon>
  </cb-upload-image>
  <cb-upload-image>
    <mat-icon svgIcon="instagram"></mat-icon>
  </cb-upload-image>`, languages).value;

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
  selector: 'page-upload-image-api',
  templateUrl: 'page-upload-image-api.html'
})
export class PageUploadImageApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbUploadImageModule } from '@lib';

  @NgModule({
    imports: [
      CbUploadImageModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
 }
