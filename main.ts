input.onButtonPressed(Button.A, function () {
    if (moving == 1) {
        radio.sendString("turn")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(2000)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (moving == 1) {
        if (direction == 1) {
            radio.sendString("reverse")
            direction = -1
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else {
            radio.sendString("forward")
            direction = 1
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    direction = 1
    if (moving == 0) {
        moving = 1
        radio.sendString("forward")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        moving = 0
        radio.sendString("stop")
    }
})
let direction = 0
let moving = 0
radio.setGroup(1)
moving = 0
