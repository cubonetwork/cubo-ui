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
    // Single chip

    <cb-chip>Default chip</cb-chip>

    // Sizes

    <cb-chip size="small">Small chip</cb-chip>
    <cb-chip size="medium">Medium chip</cb-chip>
    <cb-chip size="large">Large chip</cb-chip>

    // With icons

    <cb-chip size="small" icon="github">Small chip</cb-chip>
    <cb-chip size="medium" icon="github">Medium chip</cb-chip>
    <cb-chip size="large" icon="github">Large chip</cb-chip>

    // Colors

    <cb-chip textColor="#409aff">Blue chip</cb-chip>
    <cb-chip textColor="#3fcf8d">Green chip</cb-chip>
    <cb-chip textColor="#ffa726">Orange chip</cb-chip>
    <cb-chip textColor="#b1aeb3">Gray light chip</cb-chip>

    // Colors with background

    <cb-chip bgColor="#409aff">Blue chip</cb-chip>
    <cb-chip bgColor="#3fcf8d">Green chip</cb-chip>
    <cb-chip bgColor="#ffa726">Orange chip</cb-chip>
    <cb-chip bgColor="#b1aeb3">Gray light chip</cb-chip>

    // Chip List - Direction: Vertical

    <cb-chip-list direction="vertical">
      <cb-chip bgColor="#409aff">Blue chip</cb-chip>
      <cb-chip bgColor="#3fcf8d">Green chip</cb-chip>
      <cb-chip bgColor="#ffa726">Orange chip</cb-chip>
      <cb-chip bgColor="#b1aeb3">Gray light chip</cb-chip>
    </cb-chip-list>

    // Chip List - Direction: Horizontal

    <cb-chip-list direction="horizontal">
      <cb-chip bgColor="#409aff">Blue chip</cb-chip>
      <cb-chip bgColor="#3fcf8d">Green chip</cb-chip>
      <cb-chip bgColor="#ffa726">Orange chip</cb-chip>
      <cb-chip bgColor="#b1aeb3">Gray light chip</cb-chip>
    </cb-chip-list>`, languages).value;

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
  import { CbChipModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbChipModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
 }
