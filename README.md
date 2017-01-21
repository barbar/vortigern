# Vortigern
[![Build Status](https://travis-ci.org/barbar/vortigern.svg?branch=master)](https://travis-ci.org/barbar/vortigern)
[![Dependency Status](https://david-dm.org/barbar/vortigern.svg)]()
[![devDependency Status](https://david-dm.org/barbar/vortigern/dev-status.svg)]()
[![Code Climate](https://codeclimate.com/github/barbar/vortigern/badges/gpa.svg)](https://codeclimate.com/github/barbar/vortigern)
[![GitHub issues](https://img.shields.io/github/issues/barbar/vortigern.svg)](https://github.com/barbar/vortigern/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/barbar/vortigern/develop/LICENSE)
___

<img src="https://barbaruploads.s3.amazonaws.com/bicoz/vortigern.png" width="100%" />

**Vortigern** is our opinionated boilerplate for crafting universal web applications by using modern technologies like TypeScript, React and Redux.

[![TypeScript](https://barbaruploads.s3.amazonaws.com/bicoz/typescript.png)](https://www.typescriptlang.org/) 
[![React](https://barbaruploads.s3.amazonaws.com/bicoz/react.png)](https://github.com/facebook/react) 
[![Redux](https://barbaruploads.s3.amazonaws.com/bicoz/redux.png)](https://github.com/reactjs/redux)


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
- [Isomorphic Fetch](https://github.com/matthew-andrews/isomorphic-fetch) with [ES6-Promise](https://github.com/stefanpenner/es6-promise) for using fetch api on both client & server side.
- [Redux Thunk](https://github.com/gaearon/redux-thunk) for dispatching async actions.
- [Redux Connect](https://github.com/makeomatic/redux-connect) for resolving async props in react-router.
- [React Helmet](https://github.com/nfl/react-helmet)
- [classnames](https://github.com/JedWatson/classnames)

#### Build System
- [Webpack](https://github.com/webpack/webpack) for bundling.
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) as ts loader.
  - [Babel Loader](https://github.com/babel/babel-loader) as js loader.
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader) for providing hot reload capability to our development server
  - [Isomorphic Style Loader](https://github.com/kriasoft/isomorphic-style-loader) for loading styles on server-side.
  - [Style Loader](https://github.com/webpack/style-loader)
  - [CSS Loader](https://github.com/webpack/css-loader)
  - [PostCSS Loader](https://github.com/postcss/postcss)
    - [PostCSS cssnext](https://github.com/MoOx/postcss-cssnext)
    - [PostCSS Assets](https://github.com/assetsjs/postcss-assets)
  - [JSON Loader](https://github.com/webpack/json-loader)
  - [File Loader](https://github.com/webpack/file-loader)
  - [URL Loader](https://github.com/webpack/url-loader)
  - [Sourcemap Loader](https://github.com/webpack/source-map-loader)
  - [Manifest Plugin](https://github.com/danethurber/webpack-manifest-plugin)
  - [Extract Text Plugin](https://github.com/webpack/extract-text-webpack-plugin) for exporting bundled css. 
  - [tslint Loader](https://github.com/wbuchwalter/tslint-loader) for using tslint as preloader on build process.
  - [stylelint Loader](https://github.com/adrianhall/stylelint-loader) for using stylelint as preloader on build process.
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
- [Karma](https://github.com/karma-runner/karma) as test runner with following plugins
  - [Karma-Webpack](https://github.com/webpack/karma-webpack)
  - [Karma-Mocha](https://github.com/karma-runner/karma-mocha)
  - [Karma-Chai](https://github.com/xdissent/karma-chai)
  - [Karma-Coverage](https://github.com/karma-runner/karma-coverage)
  - [Karma-PhantomJS Launcher](https://github.com/karma-runner/karma-phantomjs-launcher)
- [Mocha](https://github.com/mochajs/mocha) as testing framework.
- [Chai](https://github.com/chaijs/chai) as assertion library.
- [Enzyme](https://github.com/jquery/jquery) for rendering React Components.
- [Fetch Mock](https://github.com/wheresrhys/fetch-mock) for testing async actions.
- [Redux Mock Store](https://github.com/arnaudbenard/redux-mock-store) for creating mock stores.

## Directory Structure
```bash
.
├── build                       # Built, ready to serve app.
├── config                      # Root folder for configurations.
│   ├── test                    # Test configurations.
│   ├── types                   # Global type definitions, written by us.
│   ├── webpack                 # Webpack configurations.
│   └── main.ts                 # Generic App configurations.
├── node_modules                # Node Packages.
├── src                         # Source code.
│   ├── app                     # App folder.
│   │ ├── components            # React Components.
│   │ ├── containers            # React/Redux Containers.
│   │ ├── helpers               # Helper Functions & Components.
│   │ ├── redux                 # Redux related code aka data layer of the app.
│   │ │   ├── modules           # Redux modules.   
│   │ │   ├── reducers.ts       # Main reducers file to combine them.  
│   │ │   └── store.ts          # Redux store, contains global app state.    
│   │ └── routes.tsx            # Routes.
│   ├── client.tsx              # Entry point for client side rendering.
│   └── server.tsx              # Entry point for server side rendering.
├── typings                     # Type definitions installed with typings.              
├── .dockerignore               # Tells docker which files to ignore.
├── .gitignore                  # Tells git which files to ignore.
├── .stylelintrc                # Configures stylelint.
├── Dockerfile                  # Dockerfile.
├── favicon.ico                 # Favicon.
├── package.json                # Package configuration.
├── README.md                   # This file
├── tsconfig.json               # TypeScript transpiler configuration.
├── tslint.json                 # Configures tslint.
└── typings.json                # Typings package configuration.
```

## Installation

You can clone from this repository or [install the latest version](https://github.com/barbar/vortigern/releases) as a zip file or a tarball. 

```bash
$ git clone https://github.com/barbar/vortigern
$ cd vortigern
$ npm install
```

## Usage

All commands defaults to development environment. You can set `NODE_ENV` to `production` or use the shortcuts below.

```bash
# Running

$ npm start # This starts the app in development mode

# Starting it with the production build
$ NODE_ENV=production npm start # or
$ npm run start:prod

# Building 

$ npm build # This builds the app in development mode

# Commands below builds the production build
$ NODE_ENV=production npm build # or
$ npm run build:prod

# Testing
$ npm test
```

For Windows users, we recommend using the shortcuts instead of setting environment variables because they work a little different on Windows.

## Notes
```bash
# If you want install additional libraries, you can also install their typings from DefinitelyTyped
$ typings install dt~<package> --global --save
# or if it's located on npm
$ typings install <package> --save
```

## Credits

Vortigern is released under the [MIT license](LICENSE). 

The image in this README belongs to [hhvferry.com](http://www.hhvferry.com/vortscrap.html).

___

## [Barbar Startup Factory](https://www.barbar.com.tr/?ref=vortigern)

<a target="_blank" href="https://barbar.digital/?ref=vortigern-barbar-logo"><img src="https://barbaruploads.s3.amazonaws.com/bicoz/logo2x.png" height="55px" /></a>

We help startups start and stay started by helping them plan, strategize, fund and execute their vision. 

You can contact us at [hey@barbar.digital](mailto:hey@barbar.digital)

Be sure to check out available [jobs at Barbar](https://github.com/barbar/hr).
