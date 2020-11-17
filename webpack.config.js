const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 4200,
    writeToDisk: false
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
      CLIENT_ID: process.env.client_id
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components'],
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}
