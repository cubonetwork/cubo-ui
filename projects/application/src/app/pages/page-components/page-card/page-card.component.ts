import { MatChipsModule, MatIconRegistry } from '@angular/material';
import { Component } from '@angular/core';
import * as hljs from 'highlight.js';
import { DomSanitizer } from '@angular/platform-browser';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-card-component'
})
export class PageCardComponent {}

@Component({
  selector: 'page-card-example',
  templateUrl: 'page-card-example.html'
})
export class PageCardExampleComponent {
  htmlCode = hljs.highlightAuto(`
  <cb-card>
    <cb-avatar [image]="'https://bit.ly/2vvFXCO'"></cb-avatar>
    <cb-card-title>Eleven</cb-card-title>
    <cb-card-subtitle>Character @ Stranger Things</cb-card-subtitle>
    <cb-card-badges>
      <mat-chip-list>
        <mat-chip color="primary" selected="true">Hero</mat-chip>
        <mat-chip color="accent" selected="true">Superpower</mat-chip>
      </mat-chip-list>
    </cb-card-badges>
    <cb-card-footer>
      <div class="social">
        <cb-social>
          <mat-icon svgIcon="linkedin"></mat-icon>
        </cb-social>
        <cb-social>
          <mat-icon svgIcon="github"></mat-icon>
        </cb-social>
        <cb-social>
          <mat-icon svgIcon="twitter"></mat-icon>
        </cb-social>
        <cb-social>
          <mat-icon svgIcon="instagram"></mat-icon>
        </cb-social>
      </div>
      <div class="actions">
        <button mat-button color="primary">Click me!</button>
      </div>
    </cb-card-footer>
  </cb-card>`, ['nohighlight']).value;

  tsCode = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  /**
   * @title Basic card
   */
  @Component({
    selector: 'card-overview-example',
    templateUrl: 'card-overview-example.html',
    styleUrls: ['card-overview-example.css']
  })
  export class CardOverviewExample {}`, ['nohighlight']).value;

  cssCode = hljs.highlightAuto(`
  /** No CSS for this example */
  `, ['nohighlight']).value;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    ),
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    ),
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg')
    ),
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
  }
}

@Component({
  selector: 'page-card-api',
  templateUrl: 'page-card-api.html'
})
export class PageCardApiComponent {
  import_content = hljs.highlightAuto(`
  import { CbCardModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbCardModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
}
