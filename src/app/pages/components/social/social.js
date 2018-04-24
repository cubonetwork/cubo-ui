const social = {
  html: `
    <cb-social-media [socialMedia]="'github'"></cb-social-media>`,
  ts: `
    import {Component} from '@angular/core';

    /**
     * @title Basic social media
     */
    @Component({
      selector: 'social-overview-example',
      templateUrl: 'social-overview-example.html',
      styleUrls: ['social-overview-example.css']
    })
    export class SocialOverviewExample {}
  `,
  css: `
    /** No CSS for this example */
  `
};

module.exports = social;
