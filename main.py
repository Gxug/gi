basic.show_string("xin chao")
basic.show_icon(IconNames.HAPPY)
basic.show_leds("""
    # . . . .
        . # # # .
        . . . # .
        . . . . #
        . . . # #
""")

def on_forever():
    pass
basic.forever(on_forever)
