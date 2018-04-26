# Cubo UI

> UI components to using on Angular

![Travis](https://img.shields.io/travis/cubonetwork/cubo-ui.svg)
[![license](https://img.shields.io/github/license/cubonetwork/cubo-ui.svg)](./license.md)
[![GitHub contributors](https://img.shields.io/github/contributors/cubonetwork/cubo-ui.svg)](https://github.com/cubonetwork/cubo-ui/graphs/contributors)

This project uses [Angular](https://angular.io/) as framework and [Angular Material](https://material.angular.io) for basic UI components.

## Getting Started

- [View lib's documentation](projects/lib/README.md)

### Application

```sh
# install dependencies
$ npm i

# Run the project
$ npm start
```

#### To generate schematics

Generate a component

```sh
ng generate cubo-schematics:component componentName
```

Generate a page

```sh
ng generate cubo-schematics:page pageName
```

With the commands above, you have everything to start.

### Lib

Generate a new release

```sh
# generate a build
npm run build:lib 

# publish new release
cd projects/lib/dist
npm publish
```

### Code Standards

This project uses [Cubo Coding Style](https://github.com/cubonetwork/coding-style) as code reference.

### Tasks

- `npm start`: run all tasks, initialize watch for changes and a starts a server
- `npm run build`: run all production tasks and create a `dist` folder to deploy
- `npm run lint`: lint for javascript and css
- `npm run fix`: command to fix all eslint errors
- `npm run deploy`: run all build tasks and deploy on gh-pages

## License

MIT License © Cubo 2018
