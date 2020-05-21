import p5 from 'p5'

let s = p => {
  const m = 100,
    step = 30
  let time = 0,
    amp = 30

  p.setup = () => {
    let canvas = p.createCanvas(600, 800)
    canvas.parent('#app')
  }

  p.draw = () => {
    let minW = 0 - m
    let maxW = p.width + m

    let minH = 0 - m
    let maxH = p.height + m

    p.background(20, 20, 20)
    // background(255);

    for (let i = minW; i < maxW; i += step) {
      for (let j = minH; j < maxH; j += step) {
        let x = i,
          y = j

        p.stroke(
          p.map(x, minW, maxW, 0, 255),
          p.map(y, minH, maxH, 0, 255),
          255
        )
        p.stroke(244)
        p.strokeWeight(2)

        p.noFill()

        let nX = x / p.width
        let nY = y / p.height

        let size =
          (p.sin(nX * -5 + time) +
            p.sin(nY * 5 + time) +
            p.cos(nX * -10 + p.HALF_PI) +
            p.sin(nY * 5 + p.PI) +
            p.sin(nX * 8 + p.PI)) *
          amp

        size = p.abs(size)

        p.line(x, y, x + 2 + size * 1.4, y + 2 + size)
      }
    }

    time += 0.1
  }
}

let sketch = new p5(s)
