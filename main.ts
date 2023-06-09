radio.onReceivedNumber(function (receivedNumber) {
    alarm = receivedNumber
    if (true) {
        basic.showIcon(IconNames.Asleep)
    } else if (false) {
        basic.showIcon(IconNames.Angry)
    }
})
let alarm = 0
radio.setGroup(1)
music.setVolume(50)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 280) {
        radio.sendNumber(1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(100)
        basic.clearScreen()
    } else {
        radio.sendNumber(0)
        music.stopAllSounds()
        basic.clearScreen()
    }
})
