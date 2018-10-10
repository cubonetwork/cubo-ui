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
  codeHtml = hljs.highlightAuto(``, languages).value;

  codeTs = hljs.highlightAuto(``, languages).value;

  codeCss = hljs.highlightAuto(`
  /** No CSS for this example */
  `, languages).value;

  constructor() { }
}

@Component({
  selector: 'page-upload-image-api',
  templateUrl: 'page-upload-image-api.html'
})
export class PageUploadImageApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbUploadImageModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbUploadImageModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
 }
