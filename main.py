let Input_value: number = []
let A: string = []
let B: string = []
input.onButtonPressed(Button.A, function () {
    Input_value += 1
})
input.onButtonPressed(Button.B, function () {
    Input_value += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Input_value == 1) {
        A = "A"
        basic.showString("" + (A))
    } else if (Input_value == 2) {
        B = "B"
        basic.showString("" + (B))
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
