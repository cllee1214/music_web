const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@style': path.join(__dirname, 'src/static/style'),
      '@images': path.join(__dirname, 'src/static/images'),
      '@components': path.join(__dirname, 'src/components'),
      '@page': path.join(__dirname, 'src/page'),
      '@api': path.join(__dirname, 'src/api')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
         'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    compress: true,
    hot: true,
    proxy: {
        '/': 'http://192.168.31.111:3000'
    }
  }
}