import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript'];

@Component({
  selector: 'page-home-component',
  templateUrl: './page-home.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHomeComponent {
  import_content = hljs.highlightAuto(`
  # install dependencies
  $ npm i

  # Run the project
  $ npm start`, languages).value;

  install = hljs.highlightAuto(`
  npm install cubo-ui`, languages).value;

  import_component = hljs.highlightAuto(`
  import { CbAvatarModule } from 'cubo-ui';
  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      CbAvatarModule
    ],
  })`, ['nohighlight']).value;
}
