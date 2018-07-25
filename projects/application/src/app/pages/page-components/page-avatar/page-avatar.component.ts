import { Component } from '@angular/core';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-avatar'
})
export class PageAvatarComponent {}

@Component({
  selector: 'page-avatar-example',
  templateUrl: 'page-avatar-example.html'
})
export class PageAvatarExampleComponent {
  codeHtml = hljs.highlightAuto(`
    <cb-avatar [image]="'https://bit.ly/2vvFXCO'"></cb-avatar>`, languages).value;

  codeTs = hljs.highlightAuto(`
    import {Component} from '@angular/core';

    @Component({
      selector: 'avatar-overview-example',
      templateUrl: 'avatar-overview-example.html',
      styleUrls: ['avatar-overview-example.css']
    })
    export class AvatarOverviewExample {}
  `, languages).value;

  codeCss = hljs.highlightAuto(`
    /** No CSS for this example */
  `, languages).value;
}

@Component({
  selector: 'page-avatar-api',
  templateUrl: 'page-avatar-api.html'
})
export class PageAvatarApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbAvatarModule } from '@lib';

  @NgModule({
    imports: [
      CbAvatarModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
 }
