import Sprite from '../base/sprite.js'
import Bullet from './bullet.js'
import DataBus from '../databus.js'

const IMG_PLAYER_SRC = 'images/hero.png'
const PLAYER_WIDTH = 186 / 2
const PLAYER_HEIGHT = 130 / 2

let databus = new DataBus()

export default class Player extends Sprite {

  constructor() {
    super(IMG_PLAYER_SRC, PLAYER_WIDTH, PLAYER_HEIGHT,
      window.innerWidth / 2 - PLAYER_WIDTH / 2, window.innerHeight - PLAYER_HEIGHT)

    this.playerCanMove = false
    this.onCreate()
  }

  onCreate() {

    canvas.addEventListener('touchstart', ((e) => {
      this.playerCanMove = this.checkPlayerCanMove(e)
    }).bind(this))

    canvas.addEventListener('touchmove', ((e) => {
      if (this.playerCanMove) {
        this.x = e.touches[0].clientX - PLAYER_WIDTH / 2
        this.y = e.touches[0].clientY - PLAYER_HEIGHT / 2

        this.edgeDetection()
      }
    }).bind(this))

    canvas.addEventListener('touchend', ((e) => {
      this.playerCanMove = false
    }).bind(this))

  }

  edgeDetection() {
    if (this.x <= 0) {
      this.x = 0
    }

    if (this.x >= window.innerWidth - PLAYER_WIDTH) {
      this.x = window.innerWidth - PLAYER_WIDTH
    }

    if (this.y <= 0) {
      this.y = 0
    }

    if (this.y >= window.innerHeight - PLAYER_HEIGHT) {
      this.y = window.innerHeight - PLAYER_HEIGHT
    }
  }

  checkPlayerCanMove(e) {
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

    if (x >= this.x && x <= this.x + PLAYER_WIDTH &&
      y >= this.y && y <= this.y + PLAYER_HEIGHT) {
      return true
    }

    return false
  }

  shoot(ctx) {
    let bullet = databus.pool.getItemByClass('bullet', Bullet)
    bullet.init(this.x + PLAYER_WIDTH / 2, this.y - PLAYER_HEIGHT / 2, 2)

    databus.bullets.push(bullet)
  }

}