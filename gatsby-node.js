const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
      plugins: [new webpack.IgnorePlugin(/^electron$/)]
  });
}