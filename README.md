# Vortigern
[![Dependency Status](https://david-dm.org/barbar/vortigern.svg)]()
[![devDependency Status](https://david-dm.org/barbar/vortigern/dev-status.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/barbar/vortigern.svg)](https://github.com/barbar/vortigern/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/barbar/vortigern/develop/LICENSE)
___

<img src="https://barbaruploads.s3.amazonaws.com/bicoz/vortigern.png" width="100%" />

**Vortigern** is our opinionated boilerplate for crafting universal web applications by using modern technologies like TypeScript, React and Redux.

## Libraries
Vortigern uses the following libraries and tools:

#### Core
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://github.com/facebook/react) & [React DOM](https://github.com/facebook/react) for views.
- [React Router](https://github.com/reactjs/react-router) to handle in-app routing.
- [Redux](https://github.com/reactjs/redux) for managing application state.
- [React-Redux](https://github.com/reactjs/react-redux) to use React-Redux bindings.
- [React-Router-Redux](https://github.com/reactjs/react-router-redux) to keep application state sync with route changes.

#### Utilities
- [classnames](https://github.com/JedWatson/classnames)
- [Redux Thunk](https://github.com/gaearon/redux-thunk) for dispatching async actions.
- [Isomorphic Fetch](https://github.com/matthew-andrews/isomorphic-fetch) with [ES6-Promise](https://github.com/stefanpenner/es6-promise) for using fetch api on both client & server side.
- [React Helmet](https://github.com/nfl/react-helmet)

#### Build System
- [Webpack](https://github.com/webpack/webpack) for bundling.
	- [TypeScript Loader](https://github.com/andreypopp/typescript-loader) as ts loader.
	- [Babel Loader](https://github.com/babel/babel-loader) as js loader.
	- [React Hot Loader](https://github.com/gaearon/react-hot-loader) for providing hot reload capability to our development server
	- [Isomorphic Style Loader](https://github.com/kriasoft/isomorphic-style-loader) for loading styles on server-side.
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
	- [Istanbul Instrumenter Loader](https://github.com/deepsweet/istanbul-instrumenter-loader) for using istanbul on postload process while generating code coverage reports.

#### Dev & Prod Server
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
	- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
	- [Webpack Hot Middleware](https://github.com/webpack/webpack-hot-middleware)
- [Express](https://github.com/expressjs/express) for running server both on client and server side.
- [Compression](https://github.com/expressjs/compression) for gzip compression
- [Serve Favicon](https://github.com/expressjs/serve-favicon) for serving favicon.

#### Developer Experience
- [Typings](https://github.com/typings/typings) for installing type definitions of external libraries.
- [tslint](https://github.com/palantir/tslint) for linting TypeScript files.
- [stylelint](https://github.com/stylelint/stylelint) for linting styles.
- [Redux Logger](https://github.com/theaqua/redux-logger)
- [Redux DevTools](https://github.com/gaearon/redux-devtools)
- [Chalk](https://github.com/chalk/chalk) for colored terminal logs.

#### Testing
- [Karma](https://github.com/karma-runner/karma) as test runner.
- [Mocha](https://github.com/mochajs/mocha) as testing framework.
- [Chai](https://github.com/chaijs/chai) with [Chai-Jquery](https://github.com/chaijs/chai-jquery) as assertion library.
- [jQuery](https://github.com/jquery/jquery) as test helper for DOM selecting and manipulation.
- [React Addons Test Utils]() for rendering components and simulating events.
- [Karma-Webpack](https://github.com/webpack/karma-webpack), [Karma-Mocha](https://github.com/karma-runner/karma-mocha), [Karma-Chai](https://github.com/xdissent/karma-chai), [Karma-Coverage](https://github.com/karma-runner/karma-coverage), [Karma-PhantomJS Launcher](https://github.com/karma-runner/karma-phantomjs-launcher) as Karma plugins.

## Installation
```bash
$ git clone https://github.com/barbar/vortigern
$ cd vortigern
$ npm run setup
```

## Usage
```bash
# Running app on development mode
$ npm run dev

# Building for production
$ npm run build

# Running app on production mode
$ npm start

# Running unit tests
$ npm run test
```

## Notes
```bash
# If you want install additional libraries, you can also install their typings from DefinitelyTyped
$ typings install <package> --ambient --save
# or if it's located on npm
$ typings install <package> --save

```

## Credits

The photo in this readme belongs to [hhvferry.com](http://www.hhvferry.com/vortscrap.html).