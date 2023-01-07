sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.startCountdown(25)
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.placeOnRandomTile(coins, sprites.builtin.forestTiles10)
    if (info.score() > 9) {
        game.over(true, effects.confetti)
    }
    
})
let coins : Sprite = null
scene.setBackgroundColor(0)
let player_1 = sprites.create(assets.image`
    minecraft steve
`, SpriteKind.Player)
controller.moveSprite(player_1)
tiles.setCurrentTilemap(tilemap`
    level1
`)
scene.cameraFollowSprite(player_1)
coins = sprites.create(img`
        . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . .
    `, SpriteKind.Food)
forever(function on_forever() {
    music.playMelody("C5 A B G A F G E ", 120)
})
