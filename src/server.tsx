import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

import * as ReactRouter from "react-router";
const RouterContext = ReactRouter.RouterContext as any;
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import { configureStore } from "./app/redux/store";
import routes from "./app/routes";

import AppConfig from "../config/AppConfig";
import * as WebpackConfigurator from '../config/webpack/WebpackConfigurator';

const FileSystem = require("fs");
const Path = require("path");
const Express = require("express");
const Compression = require("compression");
const ServeFavicon = require("serve-favicon");
const Chalk = require("chalk");
const Cheerio = require("cheerio");

const DocTitle = require("react-document-title");

const store = configureStore({});

const appPort = __DEVELOPMENT__ ? AppConfig.server.devPort : AppConfig.server.prodPort;
const app = Express();

app.use(Compression());

/**
 * Development - Client Side Specific Settings
 */
if (__DEVELOPMENT__) {
	const Webpack = require("webpack");

	let config = WebpackConfigurator.configure("client", "development");
	let compiler = Webpack(config);

	app.use(require("webpack-dev-middleware")(compiler, {
		publicPath: config.output.publicPath,
		stats: {
			colors: true
		}
	}));

	app.use(require("webpack-hot-middleware")(compiler));

	process.chdir("src");
}

/**
 * Production - Server Side Specific Settings
 */
app.use(ServeFavicon(Path.resolve("favicon.ico")));

app.use("/static", Express.static(Path.resolve("static")));

app.use((req, res) => {

  ReactRouter.match({ routes: routes, location: req.url },
  (error, redirectLocation, renderProps) => {
    
    if (error) res.status(500).send(error.message);
    
    else if (redirectLocation) res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    
    else if (renderProps) {
      let contentHtml = ReactDOMServer.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      let html = FileSystem.readFileSync("index.html", "utf8");
      let $ = Cheerio.load(html);
      $("title").text(DocTitle.rewind());
      $("head").append(`<script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};</script>`)
      $("#app").empty().append(contentHtml);
      html = $.html();

      res.status(200).send(html);
    }
    else res.status(404).send("Not found.");
  });
});

app.listen(appPort, "localhost", err => {
  err
		? console.error(Chalk.red(err))
		: console.info(Chalk.dim(`\nlistening at http://localhost:${appPort}\n`));
});

