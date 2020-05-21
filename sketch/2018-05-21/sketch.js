import p5 from 'p5'

let s = p => {
  let mapped,
    update = 0

  p.setup = () => {
    let canvas = p.createCanvas(600, 800)
    canvas.parent('#app')
  }

  p.draw = () => {
    let options = ['again', 'and']
    let string = options[Math.floor(update) % options.length]

    mapped = p.sin(p.frameCount * 0.1) * 20

    p.background(250)

    p.push()
    p.blendMode(p.MULTIPLY)

    p.textAlign(p.CENTER, p.CENTER)
    p.textSize(150)
    p.textStyle(p.BOLD)

    // cyan
    p.fill(0, 255, 255)
    p.text(string, p.width / 2 + mapped, p.height / 2)

    // magenta
    p.fill(255, 0, 255)
    p.text(string, p.width / 2, p.height / 2)

    //yellow
    p.fill(255, 255, 0)
    p.text(string, p.width / 2 - mapped, p.height / 2)

    p.pop()

    p.push()
    p.blendMode(p.DIFFERENCE)
    p.fill(255)
    p.rect(0, 0, p.width, p.height)
    p.pop()
  }

  setInterval(() => {
    update++
  }, 500)
}

let sketch = new p5(s)
