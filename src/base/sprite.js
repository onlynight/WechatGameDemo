export default class Sprite {

  // 构造函数
  constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0) {
    this.img = new Image()

    this.img.src = imgSrc;

    this.width = width;
    this.height = height;

    this.x = x;
    this.y = y;

    this.visible = true;
  }

  drawToCanvas(ctx) {
    if (!this.visible) {
      return;
    }

    ctx.drawImage(
      this.img,
      this.width,
      this.height,
      this.x,
      this.y
    );
  }

  /**
   * @param sp Sprite 实例
   */
  isCollideWith(sp) {
    let spX = sp.x + sp.width / 2;
    let spY = sp.y + sp.height / 2;

    if(!this.visible||!sp.visible){
      return false;
    }

    return !!( spX >= this.x 
            && spX <= this.x + this.width
            && spY >= this.y
            && spY <= this.y + this.height)
  }

}