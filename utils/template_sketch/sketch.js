import p5 from 'p5'

let s = p => {
  let canvas

  p.setup = () => {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight)
    canvas.parent('#app')
  }

  p.draw = () => {
    p.background(0)
  }

  window.addEventListener('resize', () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
  })
}

let sketch = new p5(s)
