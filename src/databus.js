import Pool from './base/pool'

let instance

export default class DataBus {
  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;

    this.pool = new Pool()

    this.reset()
  }

  reset() {
    this.frame = 0
    this.score = 0
    this.bullets = []
    this.enemys = []
    this.animations = []
    this.gameOver = false
  }

  removeEnemy(enemy) {
    let temp = this.enemys.shift()

    temp.visible = false

    this.pool.recover('enemy', enemy)
  }

  removeBullet(bullet) {
    // let temp = this.bullets.shift()
    let temp = null
    let index = -1

    for (let i = 0; i < this.bullets.length; i++) {
      if (bullet.index === this.bullets[i].index) {
        temp = this.bullets[i]
        index = i
        break
      }
    }

    if (temp != null) {
      this.bullets.splice(index, 1)
      temp.visible = false
      this.pool.recover('bullet', temp)
    }
  }
}