import Animation from '../base/animation'
import DataBus from '../databus.js'

const BULLET_IMG_SRC = 'images/bullet.png'
const BULLET_WIDTH = 62 / 4
const BULLET_HEIGHT = 108 / 4

let databus = new DataBus()

const __ = {
  speed: Symbol('speed')
}

export default class Bullet extends Animation {

  constructor() {
    super(BULLET_IMG_SRC, BULLET_WIDTH, BULLET_HEIGHT)
  }

  init(x, y, speed) {
    this.x = x - BULLET_WIDTH / 2
    this.y = y
    this[__.speed] = speed

    this.visible = true
  }

  update() {
    this.y -= this[__.speed]
    console.log(this[__.speed])

    if (this.y < -this.height) {
      databus.removeBullets(this)
    }
  }

}