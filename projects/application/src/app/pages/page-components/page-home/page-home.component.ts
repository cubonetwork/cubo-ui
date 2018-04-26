import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import * as hljs from 'highlight.js';
import home from './home';
const languages = ['html', 'typescript'];

@Component({
  selector: 'page-home-component',
  templateUrl: './page-home.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHomeComponent {
  import_content = hljs.highlightAuto(home.import_content, languages).value;
  install = hljs.highlightAuto(home.install, languages).value;
  import_component = hljs.highlightAuto(home.import_component, ['nohighlight']).value;
}
