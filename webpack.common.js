const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // There are two point entries, index and fontawesome 
  entry: {
    fontawesome: ['@babel/polyfill/noConflict', './src/js/fontawesome.js'],
    index: ['@babel/polyfill', './src/js/index.js']
  },
  // Output js
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'assets/js/[name].bundle.js'
  },
  plugins: [
    // Using HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: true,
              outputPath: 'assets/img'
            }
          }
        ]
      }
    ]
  },
  // Remove warning message in console
  performance: { 
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
