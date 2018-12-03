import './libs/weapp-adapter'
var drawLogo = require('./runtime/drawLogo')

export default class Main {
  
  onCreate(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var context = canvas.getContext('2d')
    context.fillStyle = 'red'
    context.fillRect(0, 0, width, height)

    console.log("screen width = " + width)
    console.log("screen height = " + height)

    drawLogo(canvas, 40, 40)
  }

}