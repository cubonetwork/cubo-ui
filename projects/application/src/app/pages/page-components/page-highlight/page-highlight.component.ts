import { Component } from '@angular/core';
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
  // Opening to right

  <cb-highlight position="right">
    <cb-highlight-header>Header of highlight</cb-highlight-header>
    <cb-highlight-content>This is an example of content inside highlight</cb-highlight-content>
  </cb-highlight>

  // Opening to left

  <cb-highlight position="left">
    <cb-highlight-header>Header of highlight</cb-highlight-header>
    <cb-highlight-content>This is an example of content inside highlight</cb-highlight-content>
  </cb-highlight>
`, languages).value;

  codeTs = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  @Component({
    selector: 'highlight-overview-example',
    templateUrl: 'highlight-overview-example.html',
    styleUrls: ['highlight-overview-example.css']
  })
  export class HighlightOverviewExample {}`, languages).value;

  codeCss = hljs.highlightAuto(`
  /** No CSS for this example */
  `, languages).value;
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
