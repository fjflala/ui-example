/**
 *  Module dependencies
 */
const path = require('path');

/**
 *  Webpack Config for storybook
 */
module.exports = {
  module: {
    rules: [
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
