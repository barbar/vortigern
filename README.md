# Universal React & Typescript Starter
[![Dependency Status](https://david-dm.org/barbar/react-ts-starter.svg)](https://david-dm.org/barbar/react-ts-starter.svg)
[![devDependency Status](https://david-dm.org/barbar/react-ts-starter/dev-status.svg)](https://david-dm.org/barbar/react-ts-starter#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/barbar/react-ts-starter.svg)](https://github.com/barbar/react-ts-starter/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/barbar/react-ts-starter/develop/LICENSE)
___

## About
Starter kit for modern, universal and typesafe web applications.

### Core
- [Typescript](https://www.typescriptlang.org/) for typesafe Javascript. 
- [React](https://github.com/facebook/react) & [React DOM](https://github.com/facebook/react) for views.
- [React Router](https://github.com/reactjs/react-router) to handle in-app routing.
- [Redux](https://github.com/reactjs/redux) for managing application state.
- [React-Redux](https://github.com/reactjs/react-redux) to use React-Redux bindings.
- [React-Router-Redux](https://github.com/reactjs/react-router-redux) to keep application state sync with route changes.

### Utilities
- [classnames](https://github.com/JedWatson/classnames)
- [Redux Thunk](https://github.com/gaearon/redux-thunk) for dispatching async actions.
- [Isomorphic Fetch](https://github.com/matthew-andrews/isomorphic-fetch) with [ES6-Promise](https://github.com/stefanpenner/es6-promise) for usinfe fetch api on both client & server side.
- [React Helmet](https://github.com/nfl/react-helmet)
- [Jquery](https://github.com/jquery/jquery) as test helper for DOM selecting and manipulation.

### Build System
- [Webpack](https://github.com/webpack/webpack) for bundling.
	- [Typescript Loader](https://github.com/andreypopp/typescript-loader) as ts loader.
	- [Babel Loader](https://github.com/babel/babel-loader) as js loader.
	- [React Hot Loader](https://github.com/gaearon/react-hot-loader) for providing hot reload capability to our development server.
	- [Isomorphic Style Loader](https://github.com/kriasoft/isomorphic-style-loader) for loading styles on server-side.
	- [Style Loader](https://github.com/webpack/style-loader)
	- [CSS Loader](https://github.com/webpack/css-loader)
	- [PostCSS Loader](https://github.com/postcss/postcss)
		- [Autoprefixer](https://github.com/postcss/autoprefixer)
		- [PreCSS](https://github.com/jonathantneal/precss)
		- [PostCSS Assets](https://github.com/assetsjs/postcss-assets)
	- [JSON Loader](https://github.com/webpack/json-loader)
	- [File Loader](https://github.com/webpack/file-loader) & [URL Loader](https://github.com/webpack/url-loader)
	- [SourceMap Loader](https://github.com/webpack/source-map-loader)
	- [Manifest Plugin](https://github.com/danethurber/webpack-manifest-plugin)
	- [Extract Text Plugin](https://github.com/webpack/extract-text-webpack-plugin) for exporting bundled css. 
	- [Tslint Loader](https://github.com/wbuchwalter/tslint-loader) for using tslint as preloader on build process.
	- [Stylelint Loader](https://github.com/adrianhall/stylelint-loader) for using stylelint as preloader on build process.

### Dev & Prod Server
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
	- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
	- [Webpack Hot Middleware](https://github.com/webpack/webpack-hot-middleware)
- [Express](https://github.com/expressjs/express) for runnig server both on client, server.
- [Compression](https://github.com/expressjs/compression) for gzip compression
- [Serve Favicon](https://github.com/expressjs/serve-favicon) for serving favicon.

### Developer Experience
- [Typings](https://github.com/typings/typings) for installing type definitions of external libraries.
- [tslint](https://github.com/palantir/tslint) for linting Typescript files.
- [stylelint](https://github.com/stylelint/stylelint) for linting styles.
- [Redux Logger](https://github.com/theaqua/redux-logger)
- [Redux DevTools](https://github.com/gaearon/redux-devtools)
- [Chalk](https://github.com/chalk/chalk) for colored terminal logs.

### Testing
- Unit Tests
	- [Karma](https://github.com/karma-runner/karma) as test runner.
	- [Mocha](https://github.com/mochajs/mocha) as testing framework.
	- [Chai](https://github.com/chaijs/chai) with [Chai-Jquery](https://github.com/chaijs/chai-jquery) as assertion library.
	- [React Addons Test Utils]() for rendering components and simulating events.
	- [Karma-Webpack](https://github.com/webpack/karma-webpack), [Karma-Mocha](https://github.com/karma-runner/karma-mocha), [Karma-Chai](https://github.com/xdissent/karma-chai) and [Karma-PhantomJS Launcher](https://github.com/karma-runner/karma-phantomjs-launcher) as Karma plugins.

## Installation
```bash
$ git clone https://github.com/barbar/react-ts-starter
$ cd react-ts-starter
$ npm run setup
```

## Usage
```bash
# Running app on development mode
$ npm run dev

# Building for production
$ npm run build

# Running app on production mode
$ npm start

# Running unit tests
$ npm run test
```

## Notes
```bash
# If you want install additional libraries, you can also install their typings from DefinitelyTyped
$ typings install <package> --ambient --save
# or if it's located on npm
$ typings install <package> --save

```
