import p5 from 'p5'

const range = n => {
  return ''
    .padStart(n)
    .split('')
    .map((e, i) => i)
}

const getWidth = () => window.innerWidth

const getHeight = () => window.innerHeight

const scale = (y, amp) => {
  return Math.sin((y / getHeight()) * Math.PI) * amp
}

let s = p => {
  class TextItem {
    constructor({ string = 'Hello, World', x = getWidth() * 0.5, y = 0 } = {}) {
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
        p.map(size, 0, 80, 130, 0) * (this.y > getHeight() * 0.5 ? -1 : 1)
      )
      p.text(this.string.toUpperCase(), getWidth() * 0.5, this.y)
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
    p.createCanvas(getWidth(), getHeight())
    textItems = textItems.filter(i => i.y > 0 && i.y < getHeight())
  }

  p.draw = () => {
    p.background(0)

    textItems.forEach((t, i, a) => {
      if (t.y > getHeight() - 40) {
        t.y = 0
      }
      t.draw()
      t.update()
    })
  }

  window.addEventListener('resize', () => {
    p.resizeCanvas(getWidth(), getHeight())
  })
}

let sketch = new p5(s)
