import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Component } from '@angular/core';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-chip'
})
export class PageChipComponent {}

@Component({
  selector: 'page-chip-example',
  templateUrl: 'page-chip-example.html'
})
export class PageChipExampleComponent {
  codeHtml = hljs.highlightAuto(`
    <cb-chip [image]="'https://bit.ly/2vvFXCO'"></cb-chip>`, languages).value;

  codeTs = hljs.highlightAuto(`
    import {Component} from '@angular/core';

    @Component({
      selector: 'chip-overview-example',
      templateUrl: 'chip-overview-example.html',
      styleUrls: ['chip-overview-example.css']
    })
    export class ChipOverviewExample {}
  `, languages).value;

  codeCss = hljs.highlightAuto(`
    /** No CSS for this example */
  `, languages).value;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
  }
}

@Component({
  selector: 'page-chip-api',
  templateUrl: 'page-chip-api.html'
})
export class PageChipApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbChipModule } from '@lib';

  @NgModule({
    imports: [
      CbChipModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
 }
