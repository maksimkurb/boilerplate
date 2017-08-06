const fs = require('fs-extra')
const path = require('path');

const constants = require('./constants');

async function clean() {
    await fs.remove(path.resolve(__dirname, '..', constants.BUILD_DIR));
}

module.exports = clean;
