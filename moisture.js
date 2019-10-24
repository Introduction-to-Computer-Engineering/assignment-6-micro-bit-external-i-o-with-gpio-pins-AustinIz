// This program measures the moisture levels between the prongs of the reader and outputs a numerical value. The "A" button start the program for 2 seconds and then stops it.//

let moisture = 0

basic.forever(function () {
    pins.analogWritePin(AnalogPin.P8, 1023)
    moisture = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P8, 0)

    if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(AnalogPin.P8, 1)
        basic.showNumber(moisture)
        basic.pause(2000)
        pins.analogWritePin(AnalogPin.P8, 0)
    }

})
