const home = {
  import_content: `
  # install dependencies
  $ npm i

  # Run the project
  $ npm start`,
  install: `
  npm install cubo-ui`,
  import_component: `
  import { CbAvatarModule } from 'cubo-ui';
  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      CbAvatarModule
    ],
  })`
};

module.exports = home;
