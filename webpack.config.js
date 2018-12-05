/**
 *  Module dependencies
 */
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 *  Helpers
 */
const entryArrayJS = glob.sync('./src/**/index.js');

const entryObject = entryArrayJS.reduce((acc, item) => {
  const name = item.replace('.js', '').replace('./src/', '');
  acc[name] = item;
  return acc;
}, {});

const copyPlugin = new CopyWebpackPlugin([{
  from: './src/**/*.scss',
  test: /(src)\/(.+)\.scss$/,
  to: './ui/[2].scss',
  force: true,
  flatten: true,
}]);

/**
 *  Webpack Config
 */
module.exports = {
  entry: entryObject,
  output: {
    libraryTarget: 'commonjs2',
    library: '[name]',
    filename: 'ui/[name].js'
  },
  resolve: {
    extensions: ['.js'],
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
    copyPlugin,
  ],
};
