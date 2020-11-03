import { Component } from '@angular/core';
import { MatIconRegistry , MatIcon } from '@angular/material/icon';
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
    // Basic example

    <cb-upload-image class="upload"></cb-upload-image>

    // Circle example

    <cb-upload-image class="upload-circle" type="circle"></cb-upload-image>
  `, languages).value;

  codeTs = hljs.highlightAuto(`
  import { Component } from '@angular/core';

  @Component({
    selector: 'upload-image-overview-example',
    templateUrl: 'upload-image-overview-example.html',
    styleUrls: ['upload-image-overview-example.css']
  })
  export class UploadImageOverviewExample {}`, languages).value;

  codeCss = hljs.highlightAuto(`
  .upload-circle {
    margin-left: auto;
    margin-right: auto;
    width: 30rem;
  }
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
