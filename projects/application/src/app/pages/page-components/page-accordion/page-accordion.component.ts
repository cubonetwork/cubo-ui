import { Component } from '@angular/core';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-accordion'
})
export class PageAccordionComponent {}

@Component({
  selector: 'page-accordion-example',
  templateUrl: 'page-accordion-example.html'
})
export class PageAccordionExampleComponent {
  codeHtml = hljs.highlightAuto(`
  <cb-accordion title="Title of accordion">
    This is an example without opened accordion.
  </cb-accordion>

  <h2>Simple accordion opened</h2>

  <cb-accordion title="Title of openened accordion" [isOpened]="true">
    This is an example with opened accordion.
  </cb-accordion>`, languages).value;

  codeTs = hljs.highlightAuto(`
    import {Component} from '@angular/core';

    @Component({
      selector: 'accordion-overview-example',
      templateUrl: 'accordion-overview-example.html',
      styleUrls: ['accordion-overview-example.css']
    })
    export class AccordionOverviewExample {}
  `, languages).value;

  codeCss = hljs.highlightAuto(`
    /** No CSS for this example */
  `, languages).value;
}

@Component({
  selector: 'page-accordion-api',
  templateUrl: 'page-accordion-api.html'
})
export class PageAccordionApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbAccordionModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbAccordionModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
 }
