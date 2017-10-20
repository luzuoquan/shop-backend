const path = require('path')
const webpack = require('webpack')

function _externals() {
  let manifest = require('./package.json')
  let dependencies = manifest.dependencies
  let externals = {};
  for (let p in dependencies) {
    externals[p] = 'commonjs ' + p
  }
  return externals
}

const webpackConfig = {
  entry: {
    index: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  target: 'node',
  externals: _externals(),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}

webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})