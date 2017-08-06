const path = require('path');
const constants = require('./constants');

const DEBUG = process.env.NODE_ENV !== 'production';
const srcRegexp = new RegExp(constants.SOURCES_DIR);

module.exports = {
  entry: path.resolve(__dirname, '..', constants.SOURCES_DIR, 'index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', constants.BUILD_DIR),
  },

  // SourceMaps
  devtool: 'cheap-module-source-map',

  stats: {
    colors: constants.USE_STDOUT_COLORS,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcRegexp,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.resolve(__dirname, '..', constants.BUILD_DIR),
          },
        },
      },
    ],
  },
};
