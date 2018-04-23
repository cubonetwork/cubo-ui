import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core'
import * as hljs from 'highlight.js';

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
  import_content = hljs.highlightAuto(`
    import {MatButtonModule} from '@angular/material/button';`, ['nohighlight']).value;
}
