const webpack = require('webpack');
const config = require('./webpack.config');

function bundle() {
  return new Promise((fullfill, reject) => {
    webpack(config).run((err, stats) => {
      if (err) return reject(err);

      console.log(stats.toString(config.stats));
      return fullfill();
    });
  });
}

module.exports = bundle;
