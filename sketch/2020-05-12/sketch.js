import p5 from 'p5'

const range = n => {
  return ''
    .padStart(n)
    .split('')
    .map((e, i) => i)
}

let s = p => {
  const scale = (y, amp) => {
    return Math.sin((y / p.height) * Math.PI) * amp
  }

  class TextItem {
    constructor({ string = 'Hello, World', x = p.width * 0.5, y = 0 } = {}) {
      this.string = string
      this.y = y
    }
    draw() {
      p.push()
      p.fill(scale(this.y, 255))
      p.noStroke()
      let size = scale(this.y, 80)
      p.textSize(size)
      p.textStyle(p.BOLD)
      p.textAlign(p.CENTER, p.CENTER)
      p.applyMatrix(
        1,
        0,
        0,
        1,
        0,
        p.map(size, 0, 80, 130, 0) * (this.y > p.height * 0.5 ? -1 : 1)
      )
      p.text(this.string.toUpperCase(), p.width * 0.5, this.y)
      p.pop()
    }
    update() {
      this.y += 1
    }
  }

  let y = 0
  let textItems = range(80).map(
    (e, i) =>
      new TextItem({
        y: i * 75,
        string: 'please stay inside'
      })
  )
  p.setup = () => {
    let canvas = p.createCanvas(600, 800)
    canvas.parent('#app')
    textItems = textItems.filter(i => i.y > 0 && i.y < p.height)
  }

  p.draw = () => {
    p.background(0)

    textItems.forEach((t, i, a) => {
      if (t.y > p.height - 40) {
        t.y = 0
      }
      t.draw()
      t.update()
    })
  }
}

let sketch = new p5(s)
