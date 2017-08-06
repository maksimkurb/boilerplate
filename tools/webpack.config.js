const path = require('path');

const DEBUG = process.env.NODE_ENV !== 'production';
const constants = require('./constants');

const srcRegexp = new RegExp(constants.SOURCES_DIR);

module.exports = {  
  entry: path.resolve(__dirname, '..', constants.SOURCES_DIR, 'index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', constants.BUILD_DIR),
  },

  // SourceMaps
  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcRegexp,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              targets: {
                node: 'current',
              },
              include: ['transform-es2015-spread'],
            }]],
            plugins: ['transform-object-rest-spread'],
            cacheDirectory: path.resolve(__dirname, '..', constants.BUILD_DIR),
          },
        },
      },
    ],
  },
};
