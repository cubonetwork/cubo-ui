const avatar = {
  html: `
    <mat-chip-list>
      <mat-chip>One fish</mat-chip>
      <mat-chip>Two fish</mat-chip>
      <mat-chip color="primary" selected="true">Primary fish</mat-chip>
      <mat-chip color="accent" selected="true">Accent fish</mat-chip>
    </mat-chip-list>`,
  css: `
    @font-face {
      font-family: Chunkfive; src: url('Chunkfive.otf');
    }

    body, .usertext {
      color: #F0F0F0; background: #600;
      font-family: Chunkfive, sans;
    }

    @import url(print.css);
    @media print {
      a[href^=http]::after {
        content: attr(href)
      }
    }
  `,
  ts: `
    import {Component} from '@angular/core';

    /**
     * @title Basic expansion panel
     */
    @Component({
      selector: 'expansion-overview-example',
      templateUrl: 'expansion-overview-example.html',
      styleUrls: ['expansion-overview-example.css'],
    })
    export class ExpansionOverviewExample {
      panelOpenState: boolean = false;
    }
  `
};

module.exports = avatar;
