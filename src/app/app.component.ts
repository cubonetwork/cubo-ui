import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core'
import * as hljs from 'highlight.js';
import avatar from './code/avatar.js';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  languages = ['html', 'typescript', 'css'];

  html_content = hljs.highlightAuto(avatar.html, this.languages).value;

  css_content = hljs.highlightAuto(avatar.css, this.languages).value;

  ts_content = hljs.highlightAuto(avatar.ts, this.languages).value;

  import_content = hljs.highlightAuto(`
    import {MatButtonModule} from '@angular/material/button';`, ['nohighlight']).value;
}
