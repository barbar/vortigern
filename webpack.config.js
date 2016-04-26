"use strict";

const BuildUtils = require("./config/scripts/build-utils");
const config = eval(BuildUtils.transpileTsFile("config/webpack/WebpackConfigurator.ts"))();

module.exports = config;