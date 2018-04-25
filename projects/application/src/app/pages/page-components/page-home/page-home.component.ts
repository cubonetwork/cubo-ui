import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 'page-home-component',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHomeComponent {
  import_content = hljs.highlightAuto(
    `
    # install dependencies
    $ npm i

    # Run the project
    $ npm start
    `,
    ['nohighlight']
  ).value;

  generate_page = hljs.highlightAuto(`ng generate cubo-schematics:page pageName`,['nohighlight']).value;
  generate_component = hljs.highlightAuto(`ng generate cubo-schematics:component componentName`,['nohighlight']).value;

  generate_release = hljs.highlightAuto(`
  # generate a build
  npm run build:lib

  # publish new release
  cd projects/lib/dist
  npm publish`,
  ['nohighlight']).value;
}
