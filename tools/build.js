const run = require('./run');

async function build() {
  await run('clean');
  // await run('assets');
  await run('bundle');
}

module.exports = build;
