import Animation from('../base/animation')
import DataBus from('../databus')

const ENEMY_IMG_SRC = 'images/enemy.png'
const ENEMY_WIDTH = 60
const ENEMY_HEIGHT = 60

const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

function rnd(start, end) {
  Math.floor(Math.random() * (end - start) + start)
}

export default class Enemy extends Animation {

  constructor() {
    super(ENEMY_IMG_SRC, ENEMY_WIDTH, ENEMY_HEIGHT)
  }

  initExplosionAnimation() {
    let frames = []

    const EXPLO_IMG_PREFIX = 'images/explosion'
    const EXPLO_FRAME_COUNT = 19

    for (let i = 0; i < EXPLO_FRAME_COUNT; i++) {
      frames.push(EXPLO_IMG_PREFIX + (i + 1) + '.png')
    }

    this.initFrames(frames)
  }

  update() {
    this.y += this[__.speed]

    if (this.y > window.innerHeight + this.height) {
      databus.removeEnemy(this)
    }
  }

}