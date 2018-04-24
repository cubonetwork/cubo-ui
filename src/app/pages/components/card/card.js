const card = {
  html: `
    <cb-card>
      <cb-card-title>Simple card</cb-card-title>
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

module.exports = card;
