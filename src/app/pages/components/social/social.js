const social = {
  html: `
    <cb-social>
      <mat-icon svgIcon="github"></mat-icon>
    </cb-social>`,
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
    export class SocialOverviewExample {
      constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
        iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
      }
    }
  `,
  css: `
    /** No CSS for this example */
  `
};

module.exports = social;
