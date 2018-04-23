import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIcon } from '@angular/material';


/**
 * Component `<cb-social-median>` to make a share action
 * @param socialMedia Social media's name
 */
@Component({
  moduleId: module.id,
  selector: 'cb-social-media',
  template: `
    <mat-icon svgIcon="{{socialMedia}}"></mat-icon>
  `,
  styleUrls: ['./cb-social-media.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"-" + socialMedia',
    'role': 'button'
  }
})
export class CbSocialMediaButtonComponent {
  @Input() socialMedia: string;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
  }
}
