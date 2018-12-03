import "../libs/weapp-adapter"

module.exports = function(canvas, x, y) {
  var image = new Image()
  
  image.onload = function(){
    var context = canvas.getContext("2d")
    context.drawImage(image, x, y)
  }

  image.src = 'res/image/hero.png'
}