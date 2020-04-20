/* standard modules */
const fs = require('fs')
const path = require('path')

/* external modules */
const entryPlus = require('webpack-entry-plus')
const snap = require('p5snap/modules/snap.js')

/* --- GET SKETCH PATHS --- */
const sketchDir = './sketch/'
const sketchPaths = fs.readdirSync(sketchDir).reverse()

function createSketchJson(sketchPaths=[]){
  let obj = {
    'sketches': sketchPaths.map(p => ({
      name: p,
      path: `${sketchDir}${p}/index.html`,
      image: `${sketchDir}${p}/preview.png`
    }))
  }
  /* output */
  fs.writeFileSync(
    './dist/data.json',
    JSON.stringify(obj, null, 2),
    {encoding: 'UTF-8'}
  )
}

/* --- GET INDEX HTML TEMPLATE --- */
const indexTemplate = fs.readFileSync('./src/index_template.html', {encoding: 'UTF-8'})

function createIndexFiles(sketchPaths=[]){
  sketchPaths.forEach(p => {
    fs.writeFileSync(
      `${sketchDir}${p}/index.html`,
      indexTemplate,
      {encoding: 'UTF-8'}
    )
  })
}

function createPreviewImages(sketchPaths=[]){
  return new Promise(function(resolve, reject){
    sketchPaths.forEach(p => {

      let sketch = fs.readFileSync(
        `${sketchDir}${p}/sketch.js`, { encoding: 'UTF-8' }
      )
      .replace("import p5 from 'p5'", '')
      .replace("let s = ",'')
      .replace("let sketch = new p5(s)", '')

      snap({
        raw_sketch: sketch,
        output_path: path.resolve(__dirname, `${sketchDir}${p}/`),
        width:1920,
        height:1080,
        instance:true,
        filename:'preview',
      })

    })
    resolve()
  })
}

/* --- CREATE INDEX FILES --- */
createIndexFiles(sketchPaths)
createSketchJson(sketchPaths)
createPreviewImages(sketchPaths)

const entryFiles = [
  {
    entryFiles: './src/index.js',
    outputName: './dist/bundle.js'
  },
  ...sketchPaths.map(p => ({
    entryFiles: [`${sketchDir}${p}/sketch.js`],
    outputName: `${sketchDir}${p}/bundle.js`,
  }))
]

module.exports = {
  mode: 'development',
  entry: entryPlus(entryFiles),
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
  },
  devServer: {
    writeToDisk: true,
    contentBase: path.resolve(__dirname)
  }
}
