/**
 *  Module dependencies
 */
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 *  Helpers
 */
const entryArrayJS = glob.sync('./src/**/index.js');
const entryArraySCSS = glob.sync('./src/**/*.scss');

const entryObjectJS = entryArrayJS.reduce((acc, item) => {
  const name = item.replace('.js', '').replace('./src/', '').toLowerCase();
  acc[name] = item;
  return acc;
}, {});

const entryObjectSCSS = entryArraySCSS.reduce((acc, item) => {
  const name = item.replace('.scss', '').replace('./src/', '').toLowerCase();
  acc[name] = item;
  return acc;
}, {});


const entryObject = Object.assign(entryObjectJS, entryObjectSCSS, {});

console.log(entryObject)

/**
 *  Webpack Config
 */
module.exports = {
  entry: entryObject,
  output: {
    libraryTarget: 'commonjs2',
    library: '[name]',
    filename: 'ui/[name].{js|scss}'
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
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
      }
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
          },
          output: {
            comments: false,
          },
          mangle: false,
          screwIe8: true,
          sourceMap: false,
        },
      }),
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './src/**[name].scss',
      disable: false,
      allChunks: true
    }),
  ],
};
