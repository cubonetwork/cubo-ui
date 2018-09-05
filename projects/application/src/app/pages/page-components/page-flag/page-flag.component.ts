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
  codeHtml = hljs.highlightAuto(``, languages).value;

  codeTs = hljs.highlightAuto(``, languages).value;

  codeCss = hljs.highlightAuto(`
  /** No CSS for this example */
  `, languages).value;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
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
