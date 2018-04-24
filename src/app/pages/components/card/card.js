const avatar = {
  html: `
    <cb-card>
      <cb-card-title>Simple card</cb-card-title>
    </cb-card>`,
  ts: `
    import {Component} from '@angular/core';

    /**
     * @title Basic avatar
     */
    @Component({
      selector: 'avatar-overview-example',
      templateUrl: 'avatar-overview-example.html',
      styleUrls: ['avatar-overview-example.css']
    })
    export class AvatarOverviewExample {}
  `,
  css: `
    /** No CSS for this example */
  `
};

module.exports = avatar;
