import p5 from 'p5'

let s = p => {
  let face1

  let rotation = 0

  p.setup = () => {
    let canvas = p.createCanvas(600, 800, p.WEBGL)
    canvas.parent('#app')
    let gl = canvas.elt.getContext('webgl')
    gl.disable(gl.DEPTH_TEST)

    // p.ortho(-p.width / 2, p.width / 2, p.height / 2, -p.height / 2, 0, 1000)

    p.noStroke()

    face1 = p.createGraphics(550, 550)
  }

  p.draw = () => {
    p.background(0)

    face1.clear()
    face1.textSize(90)
    face1.noFill()
    face1.stroke(255)
    face1.strokeWeight(0.5)
    face1.textAlign(p.CENTER, p.CENTER)
    face1.textLeading(80)
    face1.text(
      'OVERLOAD\nOVERLOAD\nOVERLOAD',
      0,
      0,
      face1.width,
      face1.height * 0.7
    )

    rotation += 1.2
    p.translate(10, 0, 0)
    // p.rotateY(Math.PI / 8)

    p.push()

    p.texture(face1)
    p.plane(500, 500)

    for (let i = 0; i < 5; i++) {
      let mapped = p.map(p.sin(p.frameCount * 0.1), -1, 1, 0, 1)
      p.translate(0, 0, mapped * 30)
      p.texture(face1)
      p.plane(500, 500)
    }

    p.pop()
  }
}

let sketch = new p5(s)
