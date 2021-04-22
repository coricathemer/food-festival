const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'main.bundle.js'
  },

//array to define the $ and jQuery variables
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery', 
      jQuery: 'jquery'
    }),
  ],
  mode: 'development'
};