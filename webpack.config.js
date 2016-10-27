const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.build + '/index.html',
      title: 'React In Theory',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json', '.jsx']
  }
}
