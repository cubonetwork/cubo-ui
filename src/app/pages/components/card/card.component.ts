import { Component } from '@angular/core';
import avatar from './card.js';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  selector: 'page-card-component',
  template: ``
})
export class PageCardComponent { }

@Component({
  selector: 'page-card-description',
  template: `
    <p>cb-card is a content container for text, photos, chips in the context of a single subject.</p>
    <h2>Basic card sections</h2>
    <p>The most basic card needs only an cb-card element with some content. However, it provides a number of preset sections that you can use inside of a cb-card</p>
  `,
})
export class PageCardDescriptionComponent { }

@Component({
  selector: 'page-card-code-html',
  template: `
    <p>teste</p>
  `,
})
export class PageCardCodeHtmlComponent {
  // html_content = hljs.highlightAuto(code.html, languages).value;
}

@Component({
  selector: 'page-card-code-css',
  template: `
   <p>teste</p>
  `,
})
export class PageCardCodeCssComponent {
  // css_content = hljs.highlightAuto(card.css, languages).value;
}

@Component({
  selector: 'page-card-code-ts',
  template: `
    <p>teste</p>
  `,
})
export class PageCardCodeTsComponent {
  // ts_content = hljs.highlightAuto(card.ts, languages).value;
}

@Component({
  selector: 'page-card-render',
  template: `
    <p>teste</p>
  `,
})
export class PageCardRenderComponent { }

@Component({
  selector: 'page-card-api',
  template: `<p>hello</p>`,
})
export class PageCardApiComponent {
  // import_content = hljs.highlightAuto(`import {MatButtonModule} from '@angular/material/button';`, ['nohighlight']).value;
 }
