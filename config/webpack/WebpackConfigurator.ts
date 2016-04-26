import * as Webpack from "webpack";

const FileSystem = require("fs");
const Path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Chalk = require("chalk");

import * as AppConfigModule from "../AppConfig";

export const buildSubpath = "build";
export const staticSubpath = "static";

export function configure(
  appTarget = (process.env.APP_TARGET as string || "client").trim().toLowerCase(),
  nodeEnv = (process.env.NODE_ENV as string || "development").trim().toLowerCase()
) {
  const defs = {
    "process.env.NODE_ENV": `"${nodeEnv}"`,
    __CLIENT__: appTarget === "client",
    __SERVER__: appTarget === "server",
    __DEVELOPMENT__: nodeEnv === "development",
    __PRODUCTION__: nodeEnv === "production"
  };

  const cssLoaders = [
    "style",
    "css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
    "postcss"
  ];

  const scssLoaders = cssLoaders.concat("sass");

  let config = {
    debug: choose({
      "*:production": false,
      "*": true
    }),

    target: choose({
      "client:*": "web",
      "server:*": "node"
    }),

    devtool: "source-map",

    progress: true,

    entry: choose({
      "client:development": [
        "webpack-hot-middleware/client",
        Path.resolve("src/client")
      ],
      "client:production": [
        Path.resolve("src/client")
      ],
      "server:*": [
        Path.resolve("src/server.js")
      ]
    }),

    output: choose({
      "client:development": {
        path: Path.resolve("."),
        pathinfo: true,
        publicPath: "/" + staticSubpath + "/"
      },
      "client:production": {
        path: Path.resolve(".", buildSubpath, staticSubpath),
        filename: "[name].[hash].js",
        chunkFilename: "[name].[id].[chunkhash].js",
        publicPath: "/" + staticSubpath + "/"
      },
      "server:*": {
        path: choose({
          "*:development": Path.resolve("src"),
          "*:production": Path.resolve(buildSubpath)
        }),
        pathinfo: true,
        filename: "server.js",
        publicPath: "/" + staticSubpath + "/"
      }
    }),

    externals: choose({
        "server:*": (() => {
            let nodeModules = {};
            FileSystem.readdirSync("node_modules")
                .filter(s => [".bin", ".ds_store"].indexOf(s.toLowerCase()) < 0)
                .forEach(s => nodeModules[s] = "commonjs " + s);
            return nodeModules;
        })(),

        "*": []
    }),

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                loader: 'react-hot!ts',
                exclude: /(node_modules|\.test\.ts$)/
            },
            {
                test: /\.css$/i,
                loader: choose({
                    "client:development": cssLoaders.join("!"),
                    "client:production": ExtractTextPlugin.extract(cssLoaders[0], cssLoaders.slice(1).join("!")),
                    "server:*": ExtractTextPlugin.extract(cssLoaders[0], cssLoaders.slice(1).join("!"))
                })
            },

            {
                test: /\.scss$/i,
                loader: choose({
                    "client:development": scssLoaders.join("!"),
                    "client:production": ExtractTextPlugin.extract(scssLoaders[0], scssLoaders.slice(1).join("!")),
                    "server:*": ExtractTextPlugin.extract(scssLoaders[0], scssLoaders.slice(1).join("!"))
                })
            },

            {
                test: /\.eot(\?.*)?$/,
                loader: "file?name=fonts/[hash].[ext]",
            },

            {
                test: /\.(woff|woff2)(\?.*)?$/,
                loader: "file-loader?name=fonts/[hash].[ext]",
            },

            {
                test: /\.ttf(\?.*)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]",
            },

            {
                test: /\.svg(\?.*)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]",
            },

            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url?limit=1000&name=images/[hash].[ext]'
            }
        ]
    },
        plugins: choose({
            "client:development": [
                new Webpack.DefinePlugin(defs),
                new Webpack.HotModuleReplacementPlugin(),
                new Webpack.NoErrorsPlugin()
            ],
            "client:production": [
                new Webpack.DefinePlugin(defs),
                new Webpack.optimize.OccurenceOrderPlugin(true),
                new Webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }),
                new ExtractTextPlugin("[name].[contenthash].css", { allChunks: true }),
                function() {
                    // replace bundle.css and bundle.js in html with minified versions
                    // and copy html to build/dist folder:

                    this.plugin("done", statsData => {
                        let stats = statsData.toJson();
                        //FileSystem.writeFileSync(Path.resolve("stats.json"), JSON.stringify(stats, null, "  "), "utf8");

                        if (!stats.errors.length) {
                            let htmlFileName = "index.html";
                            let html = FileSystem.readFileSync(Path.resolve("src", htmlFileName), "utf8");
                            let mainJsFileName = stats.assetsByChunkName.main.find(s => !!s.match(/\.js$/i));
                            let mainCssFileName = stats.assetsByChunkName.main.find(s => !!s.match(/\.css$/i));

                            let htmlOutput = html
                                .replace(/<script\s+src=(["'])(.+?)bundle\.js\1/i, "<script src=$1$2" + mainJsFileName + "$1")
                                .replace(/<link\s+href=(["'])(.+?)bundle\.css\1/i, "<link href=$1$2" + mainCssFileName + "$1");

                            FileSystem.writeFileSync(
                                Path.resolve(".", buildSubpath, htmlFileName),
                                htmlOutput);
                        }
                    });
                }
            ],
            "server:*": [
                new Webpack.DefinePlugin(defs),
                new Webpack.optimize.OccurenceOrderPlugin(true),
                new ExtractTextPlugin(Path.join(staticSubpath, "bundle.css"), { allChunks: true })
            ]
        }),

        postcss: () => [
          require("autoprefixer")({ browsers: ["> 2%"] })
        ],

        ts: {
          compiler: "ntypescript",
          compilerOptions: {
            noEmit: false
          }
        },

        resolve: {
          extensions: ["", ".json", ".js", ".jsx", ".ts", ".tsx"],
        }
    } as Webpack.Configuration;

    function choose(map) {
        const defKey = "*";
        let keys = Object.keys(map).filter(key => key !== defKey);

        if (map.hasOwnProperty(defKey))
            keys.push(defKey);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const parts = (key === defKey ? `${defKey}:${defKey}` : key).split(":");
            const p1 = parts[0] === defKey ? appTarget : parts[0];
            const p2 = parts[1] === defKey ? nodeEnv : parts[1];

            if (p1 === appTarget && p2 === nodeEnv)
                return map[key];
        }
    }

    console.info(Chalk.dim(`\nGenerated Webpack config for appTarget = "${appTarget}", nodeEnv = "${nodeEnv}".\n`));

    return config;
}
