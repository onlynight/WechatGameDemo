import './libs/weapp-adapter'
import Enemy from './npc/enemy'
import DataBus from './databus'
import Logo from './runtime/logo'
import Background from './runtime/background.js'

let drawLogo = require('./runtime/drawLogo')
let ctx = canvas.getContext('2d')
let databus = new DataBus()

let logo = new Logo('images/hero.png', 186 / 2, 130 / 2,
  window.innerWidth / 2 - 186 / 4, window.innerHeight / 2 - 130 / 4)

export default class Main {

  constructor() {
    this.animId = 0
    this.onCreate()
  }

  onCreate() {
    databus.reset()

    this.bg = new Background(ctx)

    this.bindLoop = this.loop.bind(this)
    window.cancelAnimationFrame(this.animId)
    this.animId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )

    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()

      console.log('test');
    }))
  }

  enemyGenerate() {
    if (databus.frame % 30 === 0) {
      let enemy = databus.pool.getItemByClass('enemy', Enemy)
      enemy.init(6)
      databus.enemys.push(enemy)
    }
  }

  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.bg.drawToCanvas(ctx)

    databus.enemys.forEach((item) => {
      item.drawToCanvas(ctx)
    })

    logo.drawLogo(ctx)

    databus.animations.forEach((ani) => {
      if (ani.isPlaying) {
        ani.aniRender(ctx)
      }
    })

  }

  update() {
    this.bg.update()

    databus.enemys.forEach((item) => {
      item.update()
    })

    this.enemyGenerate()

  }

  loop() {
    databus.frame++;

    this.update()
    this.render()

    this.animId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

}