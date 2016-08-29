var shell = require('shelljs');
shell.exec('node config/scripts/i18n', {async: true})
shell.exec('npm run build');
shell.exec('node build/server.js');

