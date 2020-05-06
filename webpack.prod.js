const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
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
    ]
  }
});
