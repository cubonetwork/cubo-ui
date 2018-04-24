import { Component } from '@angular/core';
import avatar from './avatar.js';
import * as hljs from 'highlight.js';
const languages = ['html', 'typescript', 'css'];

@Component({
  selector: 'page-avatar',
  template: ``
})
export class PageAvatarComponent {}

@Component({
  selector: 'page-avatar-description',
  template: `
    <p>cb-avatar is made for using avatar images in your app. This directive supports images in (png, jpg, etc.). If you do not provide an image url, it uses a default one.</p>
    <h2>Without image</h2>
    <p>If a image is not set, the component expects a name property. Given this property, it renders the name initials as the avatar image.</p>
    <h2>Input</h2>
    <p>The cb-avatar can receive an image or a name input to display as an avatar.</p>
    <h2>Size</h2>
    <p>The selected image size can be changed by using size property. By default, the selected size is large. This can be changed to xsmall, small, medium, or xlarge.</p>
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
  html_content = hljs.highlightAuto(avatar.html, languages).value;
}

@Component({
  selector: 'page-avatar-code-css',
  template: `
    <code [innerHtml]="css_content"></code>
  `,
})
export class PageAvatarCodeCssComponent {
  css_content = hljs.highlightAuto(avatar.css, languages).value;
}

@Component({
  selector: 'page-avatar-code-ts',
  template: `
    <code [innerHtml]="ts_content"></code>
  `,
})
export class PageAvatarCodeTsComponent {
  ts_content = hljs.highlightAuto(avatar.ts, languages).value;
}

@Component({
  selector: 'page-avatar-render',
  template: `
    <cb-avatar [imageUrl]="'https://bit.ly/2vvFXCO'"></cb-avatar>
  `,
})
export class PageAvatarRenderComponent { }

@Component({
  selector: 'page-avatar-api',
  template: `
  <h2>
    API reference for Cubo Avatar
  </h2>
  <div>
    <code [innerHtml]="import_content"></code>
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
  import_content = hljs.highlightAuto(`import { CbAvatarModule } from '@cubo/cb-avatar.module';`, ['nohighlight']).value;
 }
