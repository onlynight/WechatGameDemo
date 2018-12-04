import Sprite from '../base/sprite'

export default class Logo extends Sprite {

  constructor(imgSrc, width, height, x, y) {
    super(imgSrc, width, height, x, y)
  }

  drawLogo(ctx){
    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

}