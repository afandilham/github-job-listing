const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: ['@babel/polyfill', './src/js/index.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'targets': 
                    [
                      '> .5% or last 5 version',
                      'cover 99.5%',
                      'not dead'
                    ]
                  }
                ]
              ]
            }
          }
        ]
      },
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
      }
    ]
  }
}