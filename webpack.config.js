/**
 *  Module dependencies
 */
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

/**
 *  Helpers
 */
const entryArray = glob.sync('./src/**/index.js');

const entryObject = entryArray.reduce((acc, item) => {
  const name = item.replace('/index.js', '').replace('./src/', '');
  acc[name] = item;
  return acc;
}, {});

/**
 *  Webpack Config
 */
module.exports = {
  entry: entryObject,
  output: {
    filename: 'ui/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new MinifyPlugin(),
    ],
  }
};
