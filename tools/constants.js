const tty = require('tty');

module.exports = {
  BUILD_DIR: 'dist',
  SOURCES_DIR: 'src',

  USE_STDOUT_COLORS: tty.isatty(process.stdout.fd),
};
