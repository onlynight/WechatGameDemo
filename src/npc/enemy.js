import Animation from '../base/animation'
import DataBus from '../databus'
import '../libs/symbol'

const ENEMY_IMG_SRC = 'images/enemy.png'
const ENEMY_WIDTH = 60
const ENEMY_HEIGHT = 60

let ctx = canvas.getContext('2d')

const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Enemy extends Animation {

  constructor() {
    super(ENEMY_IMG_SRC, ENEMY_WIDTH, ENEMY_HEIGHT)

    this.initExplosionAnimation()
  }

  init(speed) {
    this.x = rnd(0, window.innerWidth - ENEMY_WIDTH)
    this.y = -this.height
    this[__.speed] = speed

    this.visible = true
    this.played = false
  }

  initExplosionAnimation() {
    let frames = []

    const EXPLO_IMG_PREFIX = 'images/explosion'
    const EXPLO_FRAME_COUNT = 19

    for (let i = 1; i <= EXPLO_FRAME_COUNT; i++) {
      frames.push(EXPLO_IMG_PREFIX + i + '.png')
    }

    this.initFrames(frames)
  }

  update() {
    this.y += this[__.speed]

    if (this.y > window.innerHeight + this.height) {
      databus.removeEnemy(this)
    }

    if (this.y >= window.innerHeight / 3 && !this.isPlaying && !this.played) {
      this.playAnimation()
      this.played = true
    }
  }

}