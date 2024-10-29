namespace SpriteKind {
    export const pontos = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
        . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
        . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f b c c f 8 8 f b c c f . 
        . . . . b b f . . . . b b f . . 
        `,img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 7 7 6 6 6 7 b 8 . 
        . . 8 8 9 9 7 7 7 7 6 6 7 9 b 8 
        . 8 6 6 9 9 7 7 7 7 7 6 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f f f b f 8 8 f f f b f . 
        . . . . c b b . . . . c b b . . 
        `,img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 6 6 6 7 7 7 b 8 . 
        . . 8 8 9 9 7 6 6 6 7 7 7 9 b 8 
        . 8 6 6 9 9 7 7 6 6 6 7 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f c b b f 8 8 f c b b f . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
        . . 8 8 9 9 7 6 6 6 6 6 7 9 b 8 
        . 8 6 6 9 9 7 7 6 6 6 6 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f b b c f 8 8 f b b c f . 
        . . . . c f f . . . . c f f . . 
        `],
    500,
    true
    )
})
info.onScore(10, function () {
    music.stopAllSounds()
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 6 6 6 6 6 8 8 . . . . . 
        . . 8 6 6 6 6 6 6 6 8 8 . . . . 
        . 8 b 7 6 6 6 6 6 7 9 8 . . . . 
        8 b 9 7 6 6 6 6 7 7 9 9 8 8 . . 
        8 9 9 7 6 6 6 7 7 7 9 9 6 6 8 . 
        8 9 9 6 7 7 7 7 7 6 9 9 6 6 6 8 
        8 9 9 8 8 8 8 8 8 8 9 9 6 6 6 8 
        8 9 b 8 b 8 b b b 8 b 9 6 6 6 8 
        8 b 8 b b 8 b b b b 8 8 8 8 6 8 
        8 8 8 6 6 8 6 6 6 6 8 8 3 3 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 3 3 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 f f f 8 8 8 8 f f f 8 8 8 8 
        . f c c b f 8 8 f c c b f 8 8 . 
        . . f b b . . . . f b b . . . . 
        `,img`
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 6 6 6 6 6 8 8 . . . . . 
        . . 8 6 6 6 6 6 6 6 8 8 . . . . 
        . 8 b 7 6 6 6 7 7 7 9 8 . . . . 
        8 b 9 7 6 6 7 7 7 7 9 9 8 8 . . 
        8 9 9 7 6 7 7 7 7 7 9 9 6 6 8 . 
        8 9 9 6 7 7 7 7 7 6 9 9 6 6 6 8 
        8 9 9 8 8 8 8 8 8 8 9 9 6 6 6 8 
        8 9 b 8 b 8 b b b 8 b 9 6 6 6 8 
        8 b 8 b b 8 b b b b 8 8 8 8 6 8 
        8 8 8 6 6 8 6 6 6 6 8 8 3 3 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 3 3 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 f f f 8 8 8 8 f f f 8 8 8 8 
        . f b f f f 8 8 f b f f f 8 8 . 
        . . b b c . . . . b b c . . . . 
        `,img`
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 6 6 6 6 6 8 8 . . . . . 
        . . 8 6 6 6 6 6 6 6 8 8 . . . . 
        . 8 b 7 7 7 6 6 6 7 9 8 . . . . 
        8 b 9 7 7 7 6 6 6 7 9 9 8 8 . . 
        8 9 9 7 7 6 6 6 7 7 9 9 6 6 8 . 
        8 9 9 6 7 7 7 7 7 6 9 9 6 6 6 8 
        8 9 9 8 8 8 8 8 8 8 9 9 6 6 6 8 
        8 9 b 8 b 8 b b b 8 b 9 6 6 6 8 
        8 b 8 b b 8 b b b b 8 8 8 8 6 8 
        8 8 8 6 6 8 6 6 6 6 8 8 3 3 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 3 3 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 f f f 8 8 8 8 f f f 8 8 8 8 
        . f b b c f 8 8 f b b c f 8 8 . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 6 6 6 6 6 8 8 . . . . . 
        . . 8 6 6 6 6 6 6 6 8 8 . . . . 
        . 8 b 7 6 6 6 6 6 7 9 8 . . . . 
        8 b 9 7 6 6 6 6 6 7 9 9 8 8 . . 
        8 9 9 7 6 6 6 6 7 7 9 9 6 6 8 . 
        8 9 9 6 7 7 7 7 7 6 9 9 6 6 6 8 
        8 9 9 8 8 8 8 8 8 8 9 9 6 6 6 8 
        8 9 b 8 b 8 b b b 8 b 9 6 6 6 8 
        8 b 8 b b 8 b b b b 8 8 8 8 6 8 
        8 8 8 6 6 8 6 6 6 6 8 8 3 3 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 3 3 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 f f f 8 8 8 8 f f f 8 8 8 8 
        . f c b b f 8 8 f c b b f 8 8 . 
        . . f f c . . . . f f c . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
    sprites.destroy(myEnemy)
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pontos, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(pontos2)
    pontos2 = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.pontos)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    tiles.placeOnRandomTile(pontos2, sprites.vehicle.roadVertical)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 9 9 6 6 6 6 . . . 
        . . . . . c 9 6 6 6 6 6 c . . . 
        . . . . 6 c 9 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 c 9 6 6 6 6 6 c 6 f . 
        . . . f 8 c 6 6 6 6 6 6 c 8 f . 
        . . . f 6 c 6 b b b b 6 c 6 f . 
        . . . 8 6 6 b c c c c b 6 6 8 . 
        . . . 8 8 b c c c c c c b 8 8 . 
        . . . f 8 9 9 9 9 9 9 9 9 8 f . 
        . . . f 8 d 6 6 6 6 6 6 d 8 f . 
        . . . . 6 d d 6 6 6 6 d d 6 f . 
        . . . . f 6 d 6 6 6 6 d 6 f . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        `],
    500,
    true
    )
})
let myEnemy: Sprite = null
let pontos2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
music.play(music.stringPlayable("B A G A G F A C5 ", 77), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
pontos2 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.pontos)
myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
myEnemy.follow(mySprite, 70)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadHorizontal)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(pontos2, sprites.vehicle.roadVertical)
mySprite.setBounceOnWall(false)
