import "../libs/weapp-adapter"

module.exports = function(canvas, x, y) {
  var image = new Image()

  image.onload = function() {
    var context = canvas.getContext("2d")
    context.drawImage(image, x - 186 / 4, y - 130 / 4, 186 / 2, 130 / 2)
  }

  image.src = 'res/image/hero.png'
}
