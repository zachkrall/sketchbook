/* standard modules */
const fs = require('fs')
const path = require('path')

/* external modules */
const entryPlus = require('webpack-entry-plus')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const sketchJson = require('./utils/sketchJson')

/* sketch paths */
const sketchDir = './sketch/'
const sketchPaths = fs.readdirSync(sketchDir)

sketchJson(
  sketchPaths.map(p => path.resolve(sketchDir, p)),
  path.resolve(__dirname, 'dist', 'data.json')
)

const entryFiles = [
  {
    entryFiles: './src/index.js',
    outputName: './dist/bundle.js'
  },
  ...sketchPaths.map(p => ({
    entryFiles: [`${sketchDir}${p}/sketch.js`],
    outputName: `${sketchDir}${p}/bundle.js`
  }))
]

module.exports = {
  mode: 'development',
  entry: entryPlus(entryFiles),
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './dist/style.css'
    })
  ],
  watchOptions: {
    ignored: ['./www/**', 'node_modules']
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    port: 3000,
    writeToDisk: true,
    contentBase: path.resolve(__dirname)
  }
}
