import p5 from 'p5'

let s = p => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
  }

  p.draw = () => {
    p.background(0)
  }

  window.addEventListener('resize', () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
  })
}

let sketch = new p5(s)
