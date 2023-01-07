def on_on_overlap(sprite, otherSprite):
    info.start_countdown(25)
    info.change_score_by(1)
    music.ba_ding.play()
    tiles.place_on_random_tile(coins, sprites.builtin.forest_tiles10)
    if info.score() > 9:
        game.over(True, effects.confetti)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

coins: Sprite = None
scene.set_background_color(0)
player_1 = sprites.create(assets.image("""
    minecraft steve
"""), SpriteKind.player)
controller.move_sprite(player_1)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(player_1)
coins = sprites.create(img("""
        . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . .
    """),
    SpriteKind.food)

def on_forever():
    music.play_melody("C5 A B G A F G E ", 120)
forever(on_forever)
