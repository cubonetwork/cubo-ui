import { Component } from '@angular/core';
import avatarCodeExample from './page-avatar-code-example.js';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-avatar'
})
export class PageAvatarComponent {}

@Component({
  selector: 'page-avatar-description',
  template: `
  <p>cb-avatar is made for using avatar images in your app. This directive supports images in (png, jpg, etc.). If you do not provide an image url, you can provide
  a name so the avatar is going to be the name initials.</p>
  <h2>Without image</h2>
  <p>If a image is not set, the component expects a name property. Given this property, it renders the name initials as the avatar image.</p>
  <h3>Initials</h3>
  <cb-avatar [name]="'Eleven Stranger'"></cb-avatar>
  <h2>Input</h2>
  <p>The cb-avatar can receive an image url or a name input to display as an avatar.</p>
  <h2>Size</h2>
  <p>The selected image size can be changed through the size property. By default, the selected size is large. This can be changed to xsmall, small, medium, or xlarge.</p>
  <h3>Extra Small</h3>
  <cb-avatar [imageUrl]="'https://bit.ly/2vvFXCO'" [size]="'xsmall'"></cb-avatar>
  <h3>Small</h3>
  <cb-avatar [imageUrl]="'https://bit.ly/2vvFXCO'" [size]="'small'"></cb-avatar>
  <h3>Medium</h3>
  <cb-avatar [imageUrl]="'https://bit.ly/2vvFXCO'" [size]="'medium'"></cb-avatar>
  <h3>Large</h3>
  <cb-avatar [imageUrl]="'https://bit.ly/2vvFXCO'"></cb-avatar>
  <h3>Extra Large</h3>
  <div style="max-width: 300px">
    <cb-avatar [imageUrl]="'https://bit.ly/2vvFXCO'" [size]="'xlarge'"></cb-avatar>
  </div>
  `,
})
export class PageAvatarDescriptionComponent { }

@Component({
  selector: 'page-avatar-code-html',
  template: `
    <code [innerHtml]="html_content"></code>
  `,
})
export class PageAvatarCodeHtmlComponent {
  html_content = hljs.highlightAuto(avatarCodeExample.html, languages).value;
}

@Component({
  selector: 'page-avatar-code-css',
  template: `
    <code [innerHtml]="css_content"></code>
  `,
})
export class PageAvatarCodeCssComponent {
  css_content = hljs.highlightAuto(avatarCodeExample.css, languages).value;
}

@Component({
  selector: 'page-avatar-code-ts',
  template: `
    <code [innerHtml]="ts_content"></code>
  `,
})
export class PageAvatarCodeTsComponent {
  ts_content = hljs.highlightAuto(avatarCodeExample.ts, languages).value;
}

@Component({
  selector: 'page-avatar-api',
  template: `
  <h2>
    API reference for Cubo Avatar
  </h2>
  <div>
    <pre><code [innerHtml]="import_content"></code></pre>
  </div>
  <h2>
    Directives
  </h2>
  <h3>
    CbAvatar
  </h3>
  <p>A cubo avatar component</p>
  <p>
    <span>Selector: </span>
    <code>cb-avatar</code>
  </p>
  <p>
    <span>Exported as: </span>
    <code>CbAvatar</code>
  </p>
  <table>
    <tbody>
     <tr>
      <th>Name</th>
      <th>Description</th>
     </tr>
     <tr>
      <td>@Input() imageUrl: string;</td>
      <td>The link for the avatar's image.</td>
     </tr>
     <tr>
      <td>@Input() imageAlt: string;</td>
      <td>The alt description.</td>
     </tr>
     <tr>
      <td>@Input() name: string;</td>
      <td>An avatar can be created with the name initials instead of an image.</td>
     </tr>
     <tr>
      <td>@Input() size: string;</td>
      <td>Size of the avatar.</td>
    </tr>
    <tr>
      <td>@Input() type: string;</td>
      <td>Wheter the avatar is a circle or a square.</td>
    </tr>
    </tbody>
  </table>
  `,
})
export class PageAvatarApiComponent {
  import_content = hljs.highlightAuto(`import { CbAvatarModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CommonModule,
      CbAvatarModule
    ]
  })
  export class ExampleModule { }`, ['nohighlight']).value;
 }
