const avatar = {
  html: `
    <cb-avatar [imageUrl]="'https://bit.ly/2vvFXCO'"></cb-avatar>`,
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
