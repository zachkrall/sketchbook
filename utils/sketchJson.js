const fs = require('fs')
const path = require('path')

module.exports = async (sketchPaths, output) => {
  let res = []

  for (p of sketchPaths) {
    let metaPath = path.resolve(p, 'meta.json')
    let slug = p.split('/').splice(-1, 1)[0]
    let meta = {
      title: '',
      path: `./sketch/${slug}/index.html`,
      date: slug.replace(/-/g, '')
    }

    try {
      Object.assign(
        meta,
        JSON.parse(fs.readFileSync(metaPath, { encoding: 'UTF-8' }))
      )
    } catch (err) {
    } finally {
      res.push(meta)
      // sort entries by date
      res.sort((a, b) => {
        return a.date < b.date ? 1 : -1
      })
    }
  }

  fs.writeFileSync(output, JSON.stringify(res, null, 2), { encoding: 'UTF-8' })
}
