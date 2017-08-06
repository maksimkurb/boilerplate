const run = require('./run');

async function prepublish() {
  await run('lint');
  await run('test');
}

module.exports = prepublish;
