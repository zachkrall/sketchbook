const fs = require('fs')
const path = require('path')
const sketchJson = require('./sketchJson')

const sketchDir = './sketch/'
const sketchPaths = fs.readdirSync(sketchDir).map(p => {
  return path.resolve(sketchDir, p)
})

sketchJson(sketchPaths, path.resolve(__dirname, '..', 'dist', 'data.json'))
