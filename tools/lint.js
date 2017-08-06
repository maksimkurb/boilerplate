const path = require('path');
const childProcess = require('./childProcess');
const constants = require('./constants');

async function lint() {
  const colorsArg = constants.USE_STDOUT_COLORS ? '--color' : '';
  await childProcess(path.resolve(__dirname, '..', 'node_modules/.bin/eslint'), [colorsArg, constants.SOURCES_DIR]);
}

module.exports = lint;
