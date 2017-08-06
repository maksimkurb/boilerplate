const path = require('path');
const childProcess = require('./childProcess');
const constants = require('./constants');

async function test() {
  const colorsArg = constants.USE_STDOUT_COLORS ? '--colors' : '';
  await childProcess(path.resolve(__dirname, '..', 'node_modules/.bin/jest'), [colorsArg, path.resolve(__dirname, '..', constants.SOURCES_DIR)]);
}

module.exports = test;
