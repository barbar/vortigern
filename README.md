# react & typescript starter

React, Typescript and hot module loading with webpack-dev-server.

## About
- We use [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with [express](https://github.com/expressjs/express), [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) for running development server. 

- Typescript code gets transpiled to es5 with [ts-loader](https://github.com/TypeStrong/ts-loader), and [reach-hot-loader](https://github.com/gaearon/react-hot-loader) gives hot reloading capability to react components.

- [Typings](https://github.com/typings/typings) makes it easier to find type definitions of external libraries.

## Installation
```bash
$ git clone https://github.com/altayaydemir/react-ts-hmr.git
$ cd react-ts-hmr
$ npm install
# You may need to install typings: https://github.com/typings/typings
$ typings install
```

## Usage
```bash
# Running app with dev server
$ npm start

# Build (if you are going to use it on prod, don't forget to set your static directory)
$ npm run build

# Clean
$ npm run clean
```

## Notes
```bash
# If you want install additional libraries, you can also install their typings from DefinitelyTyped
$ typings install <package> --ambient --save
# or if it's located on npm
$ typings install <package> --save

```