import { Component } from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-highlight-component'
})
export class PageHighlightComponent { }

@Component({
  selector: 'page-highlight-example',
  templateUrl: 'page-highlight-example.html'
})
export class PageHighlightExampleComponent {
  codeHtml = hljs.highlightAuto(`
  // Basic

  <cb-highlight icon="github"></cb-highlight>

  // Colors

  <cb-highlight color="blue" icon="github"></cb-highlight>
  <cb-highlight color="orange" icon="github"></cb-highlight>
  <cb-highlight color="green" icon="github"></cb-highlight>

  // With position

  <cb-highlight color="blue" left="20" icon="github"></cb-highlight>
  <cb-highlight color="green" right="20" icon="github"></cb-highlight>`, languages).value;

  codeTs = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  @Component({
    selector: 'highlight-overview-example',
    templateUrl: 'highlight-overview-example.html',
    styleUrls: ['highlight-overview-example.css']
  })
  export class highlightOverviewExample {}`, languages).value;

  codeCss = hljs.highlightAuto(`
  /** No CSS for this example */
  `, languages).value;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
  }
}

@Component({
  selector: 'page-highlight-api',
  templateUrl: 'page-highlight-api.html'
})
export class PageHighlightApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbHighlightModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbHighlightModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
 }
