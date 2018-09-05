import { Component } from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-flag-component'
})
export class PageFlagComponent { }

@Component({
  selector: 'page-flag-example',
  templateUrl: 'page-flag-example.html'
})
export class PageFlagExampleComponent {
  codeHtml = hljs.highlightAuto(`
  // Basic

  <cb-flag icon="github"></cb-flag>

  // Colors

  <cb-flag color="blue" icon="github"></cb-flag>
  <cb-flag color="orange" icon="github"></cb-flag>
  <cb-flag color="green" icon="github"></cb-flag>

  // With position

  <cb-flag color="blue" left="20" icon="github"></cb-flag>
  <cb-flag color="green" right="20" icon="github"></cb-flag>`, languages).value;

  codeTs = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  @Component({
    selector: 'flag-overview-example',
    templateUrl: 'flag-overview-example.html',
    styleUrls: ['flag-overview-example.css']
  })
  export class FlagOverviewExample {}`, languages).value;

  codeCss = hljs.highlightAuto(`
  /** No CSS for this example */
  `, languages).value;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
  }
}

@Component({
  selector: 'page-flag-api',
  templateUrl: 'page-flag-api.html'
})
export class PageFlagApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbFlagModule } from '@lib';

  @NgModule({
    imports: [
      CbFlagModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
 }
