var shell = require('shelljs');
var path = require('path')
var beautify_html = require('js-prettify').html
var fs = require('fs')
shell.cd(path.join(__dirname, '../../'))
shell.exec('webpack --config config/webpack/server.js')
shell.exec('webpack --config config/webpack/render.js')
require(path.join(__dirname, '../../build/renderPage')).renderPage()
.then(markup => {
  markup = beautify_html(markup)
  const indexPath = path.join(__dirname, '../../build/public/index.html')
  console.log('writing markup', markup, 'to ', indexPath)
  fs.writeFileSync(path.join(__dirname, '../../build/public/index.html'), beautify_html(markup))
  console.log('File written')
})

