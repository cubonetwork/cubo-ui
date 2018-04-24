import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <ng-template #description>
      <p>cb-avatar is made for using avatar images in your app. This directive supports images in (png, jpg, etc.). If you do not provide an image url, it uses a default one.</p>
      <h2>Without image</h2>
      <p>If a image is not set, the component expects a name property. Given this property, it renders the name initials as the avatar image.</p>
      <h2>Input</h2>
      <p>The cb-avatar can receive an image or a name input to display as an avatar.</p>
      <h2>Size</h2>
      <p>The selected image size can be changed by using size property. By default, the selected size is large. This can be changed to xsmall, small, medium, or xlarge.</p>
      <h2>Type</h2>
      <p>The selected image type can be changed by using type property. By default, the selected size is circle. This can be changed to square.</p>
      <h2>Accessibility</h2>
      <p>The image can receive an alt attribute, this can be set by usgin the imageAlt property.</p>
    </ng-template>
    <ng-template #code>
      <mat-tab label="HTML">
        <pre class="code">
          <code [innerHtml]="html_content"></code>
        </pre>
      </mat-tab>
      <mat-tab label="TS">
        <pre class="code">
          <code [innerHtml]="ts_content"></code>
        </pre>
      </mat-tab>
      <mat-tab label="CSS">
        <pre class="code">
          <code [innerHtml]="css_content"></code>
        </pre>
      </mat-tab>
    </ng-template>
  `,
})
export class PageAvatarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
