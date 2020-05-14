import p5 from 'p5'

let { innerWidth: w, innerHeight: h } = window

const max = 10
const amp = 80

const range = n => {
  return ''
    .padStart(n)
    .split('')
    .map((e, i) => i)
}

const yScale = (pos, max) => {
  return Math.abs(Math.sin((pos / max) * Math.PI))
}

const yPos = pos => {
  return range(pos + 1).reduce((a, b) => {
    return a + yScale(b, max) * amp * 1.1
  })
}

let s = p => {
  p.setup = () => {
    p.createCanvas(w, h)
    p.noStroke()
  }

  const circles = o => {
    p.push()
    let saw = i => i - Math.floor(i)
    // let animate = i => p.cos(i * Math.PI) * 0.5 + 0.5
    let offset = saw(o)
    for (let i = 0; i < 10; i++) {
      let amp = 100
      let pos = 10 - i
      let size = 10 + yScale(pos + offset, 10) * amp

      let fill = p.map(size, 50, 100, 0, 255)
      // let fill = 255
      p.fill(fill)

      let y =
        i < 1
          ? 0
          : range(pos + 1).reduce((a, b) => {
              let y2 = Math.min(11, b + offset)
              return a + yScale(y2, 11) * amp * 1.1
            })

      p.textAlign(p.CENTER, p.CENTER)
      p.textStyle(p.BOLD)
      p.textSize(size)
      p.text('HELLO', 0, y)
      // p.ellipse(0, y, size, size))
    }
  }

  p.draw = () => {
    p.background(0)

    // p.translate(p.width * 0.5, p.height * 0.5)
    p.translate(p.width * 0.5, 0)
    circles(Date.now() * 0.001)
  }
}

let sketch = new p5(s)
