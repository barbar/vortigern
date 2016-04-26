"use strict";

const FileSystem = require("fs");
const TypeScript = require("ntypescript");

function transpileTsFile(srcPath, destPath) {
  let textTs = FileSystem.readFileSync(srcPath, "utf8");

  let textJs = TypeScript.transpile(textTs, {
    jsx: TypeScript.JsxEmit.React,
    module: TypeScript.ModuleKind.CommonJS
  });

  if (destPath !== undefined)
    FileSystem.writeFileSync(destPath, textJs, "utf8");

  return textJs;
}

module.exports = {
  transpileTsFile
};
