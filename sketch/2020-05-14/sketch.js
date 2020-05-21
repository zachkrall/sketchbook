import p5 from 'p5'

let s = p => {
  p.setup = () => {
    let canvas = p.createCanvas(600, 800)
    canvas.parent('#app')
    p.textSize(10)
    p.textAlign(p.CENTER, p.CENTER)
  }

  let counter = 0
  let spacing = 10

  let string = 'JUST DO IT '

  let getLetter = (x, y) => {
    return string.split('')[(x / spacing) % string.length]
  }

  let Vec2 = (x, y) => [x || 0, y || 0]

  let RGB = val => val * 255

  let fract = x => x - Math.floor(x)

  let length = (v1, v2) => {
    let sub = [v1[0] - v2[0], v1[1] - v2[1]]
    return Math.sqrt(sub[0] * sub[0] + sub[1] * sub[1])
  }

  let invert = false
  let mult = 3

  let updateMult = c => {
    let options = [3, 4, 8, 4, 1]
    mult = options[c % options.length]
  }
  let updateString = c => {
    let options = ['JUST DO IT ', 'DO IT JUST ', 'IT JUST DO ', 'DO ']
    string = options[c % options.length]
  }

  let getFill = (x, y) => {
    let st = Vec2(x / p.width, y / p.height)
    st = [fract(st[0] * mult), fract(st[1] * mult)]
    let center = Vec2(
      Math.sin(p.frameCount * 0.1) * 0.7 + 0.5,
      Math.cos(p.frameCount * 0.1) * 0.7 + 0.5
    )

    let len = length(st, center) + p.noise(x, y, Math.random() * 255)
    return p.map(len, 0.95, 1, 0, 255)
  }

  p.draw = () => {
    // change background color
    p.background(invert ? 255 : 0)

    for (let x = spacing; x < p.width; x += spacing) {
      for (let y = spacing; y < p.height; y += spacing) {
        // draw each letter
        p.push()
        if (invert) p.blendMode(p.DIFFERENCE)
        p.fill(getFill(x, y))
        p.text(getLetter(x, y), x, y)
        p.pop()
      }
    }
  }

  setInterval(() => {
    invert = Math.random() > 0.5
    counter++
    updateMult(counter)
    updateString(counter)
  }, 1000)

  // window.addEventListener('resize', () => {
  //   p.resizeCanvas(window.innerWidth, window.innerHeight)
  // })
}

let sketch = new p5(s)
