let Wärme = 0
basic.forever(function () {
    Wärme = input.temperature()
    basic.showNumber(Wärme)
    if (Wärme <= 15) {
        basic.showIcon(IconNames.Target)
        basic.setLedColor(basic.rgb(149, 200, 216))
    } else if (Wärme >= 30) {
        basic.showIcon(IconNames.SmallDiamond)
        for (let index = 0; index < 4; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        basic.setLedColor(basic.rgb(185, 11, 74))
    } else if (Wärme >= 15) {
        basic.showIcon(IconNames.Diamond)
        basic.setLedColor(basic.rgb(66, 200, 32))
    }
})
