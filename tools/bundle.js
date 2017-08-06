const webpack = require('webpack');
const config = require('./webpack.config');

function bundle() {
  return new Promise((fullfill, reject) => {

    webpack(config).run((err, stats) => {
      if (err) return reject(err);

      console.info(stats.toString(config.stats));
      fullfill();
    });

  });
}

module.exports = bundle;
