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
  codeSmallHtml = hljs.highlightAuto(`
  <cb-card [size]="'small'">
    <cb-card-image>
      <img src="string" alt="Alt">
    </cb-card-image>
    <cb-card-footer [border]="false">
      <cb-card-title>Beatles</cb-card-title>
      <cb-card-pretitle>Band</cb-card-pretitle>
    </cb-card-footer>
  </cb-card>`, languages).value;

  codeCompanyHtml = hljs.highlightAuto(`
  <cb-card>
    <cb-card-image>
      <img src="string" alt="Alt">
    </cb-card-image>
    <cb-card-pretitle>Cubo</cb-card-pretitle>
    <cb-card-description>
      <p><a href="http://cubo.network/" target="_blank">cubo.network/</a></p>
      <p>São Paulo</p>
    </cb-card-description>
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
    </cb-card-footer>
  </cb-card>`, languages).value;

  codeAnimesHtml = hljs.highlightAuto(`
  <cb-card>
    <cb-card-image>
      <img src="string" alt="Alt">
    </cb-card-image>
    <cb-card-pretitle>Animes</cb-card-pretitle>
    <cb-card-title>Dragon Ball</cb-card-title>
    <cb-card-info>🇯🇵 Japan</cb-card-info>
    <cb-card-info>✨ 1984</cb-card-info>
    <cb-card-footer>
      <button mat-raised-button color="primary">Ver mais detalhes</button>
    </cb-card-footer>
  </cb-card>`, languages).value;

  codeHtml = hljs.highlightAuto(`
  <cb-card [center]="true">
    <cb-card-image>
      <cb-avatar [image]="'https://bit.ly/2vvFXCO'"></cb-avatar>
    </cb-card-image>
    <cb-card-title>Eleven</cb-card-title>
    <cb-card-description>Character @ Stranger Things</cb-card-description>
    <cb-card-badges>
      <cb-chip-list>
        <cb-chip color="green" bg="true">Superpower</cb-chip>
      </cb-chip-list>
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
  </cb-card>`, languages).value;

  codeTs = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  /**
   * @title Basic card
   */
  @Component({
    selector: 'card-example',
    templateUrl: 'card-example.html',
    styleUrls: ['card-example.css']
  })
  export class CardOverviewExample {}`, languages).value;

  codeCss = hljs.highlightAuto(`
  /** No CSS for this example */
  `, languages).value;

  codeOrientationRowHtml = hljs.highlightAuto(`
  <cb-card [orientation]="'row'">
    <cb-card-header>
      <cb-chip color="green" bg="true">Hero</cb-chip>
    </cb-card-header>
    <cb-card-image>
      <cb-avatar [image]="'https://bit.ly/2vvFXCO'"></cb-avatar>
    </cb-card-image>
    <cb-card-title>Eleven</cb-card-title>
    <cb-card-description>Character @ Stranger Things</cb-card-description>
    <cb-card-badges>
      <cb-chip-list>
        <cb-chip color="green" bg="true">Superpower</cb-chip>
      </cb-chip-list>
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
  </cb-card>`, languages).value;

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
