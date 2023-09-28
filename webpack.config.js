// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/js-http.js',
  output: {
    filename: 'js-http.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};