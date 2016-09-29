export default function(game) {
    grass = game.add.tileSprite(0, 0, maxX, maxY, 'grass')
    grass.fixedToCamera = true

     game.camera.focusOnXY(0, 0)
  
   cursors = game.input.keyboard.createCursorKeys()
}
