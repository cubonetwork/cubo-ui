const codeCardExample = {
  html: `
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
  </cb-card>`,
  ts: `
    import {Component} from '@angular/core';

    /**
     * @title Basic card
     */
    @Component({
      selector: 'card-overview-example',
      templateUrl: 'card-overview-example.html',
      styleUrls: ['card-overview-example.css']
    })
    export class CardOverviewExample {}
  `,
  css: `
    /** No CSS for this example */
  `
};

module.exports = codeCardExample;
