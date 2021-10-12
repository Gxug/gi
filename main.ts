input.onButtonPressed(Button.A, function () {
    basic.showString("" + giờ + ":" + phút + ":" + giây)
})
let giây = 0
let phút = 0
let giờ = 0
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
giờ = 0
phút = 0
giây = 0
basic.forever(function () {
    basic.pause(1000)
    giây += 1
    if (giây == 60) {
        phút += 1
        giây = 0
        if (phút == 60) {
            giờ += 1
            phút = 0
            if (giờ == 24) {
                giờ = 0
            }
        }
    }
})
