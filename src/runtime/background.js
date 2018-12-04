import Sprite from '../base/sprite.js'

const BG_IMG_SRC = 'images/bg.jpg'
const BG_WIDTH = 512
const BG_HEIGHT = 512

export default class Background extends Sprite {

  constructor(ctx) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT)

    this.top = 0
    this.drawToCanvas(ctx);
  }

  update() {
    this.top += 2

    if (this.top >= window.innerHeight) {
      this.top = 0
    }
  }

  drawToCanvas(ctx) {
    ctx.drawImage(
      this.img,
      this.x,
      this.y + this.top,
      window.innerWidth,
      window.innerHeight
    )

    ctx.drawImage(
      this.img,
      this.x,
      this.y + this.top - window.innerHeight,
      window.innerWidth,
      window.innerHeight
    )
  }

}