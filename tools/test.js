const path = require('path');
const childProcess = require('./childProcess');
const constants = require('./constants');

async function test() {
  const args = [path.resolve(__dirname, '..', constants.SOURCES_DIR)];
  if (constants.USE_STDOUT_COLORS) {
    args.push('--colors');
  }
  await childProcess(path.resolve(__dirname, '..', 'node_modules/.bin/jest'), args);
}

module.exports = test;
