import p5 from 'p5'

global.text = 'Next\nWorld\nOver'

let s = p => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.mouseX = window.innerWidth * 0.5
    p.mouseY = window.innerHeight * 0.5
  }

  p.draw = () => {
    p.background(0)

    p.translate(p.width * 0.5, p.height * 0.5)
    p.textAlign(p.CENTER, p.CENTER)

    for (let i = 40; i > 0; i--) {
      let scale = 1 - i * 0.01
      let fontSize = 200
      let amt = 10
      p.translate(
        (p.mouseX / p.width - 0.5) * amt,
        (p.mouseY / p.height - 0.5) * amt
      )
      p.push()
      p.scale(scale)
      let fill = 100 * Math.pow(scale, 6.0)
      p.colorMode(p.HSB, 100)
      p.fill(0, 0, fill)
      p.textSize(fontSize)
      p.textStyle(p.BOLD)
      p.textLeading(fontSize * 0.8)
      p.text(text, 0, 0)
      p.pop()
    }
  }

  window.addEventListener('resize', () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight)
  })
}

let sketch = new p5(s)
