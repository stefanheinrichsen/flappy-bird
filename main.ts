input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Geheim != 1) {
        if (Leben != 0) {
            neue_Höhe = -1
        }
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Geheim += 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Geheim != 1) {
        if (Leben != 0) {
            neue_Höhe = 1
        }
    }
})
let neue_Höhe = 0
let Geheim = 0
let Leben = 0
let Speed = 500
let Schwierigkeit = 0
Leben = 3
let höhe = 2
Geheim = 0
let Block_1 = 7
let Block_2 = 11
let Block_3 = 15
basic.forever(function () {
    if (höhe < 0) {
        höhe = 0
    }
    if (Block_1 < 0) {
        Block_1 = randint(7, 10)
        Schwierigkeit += 1
    }
    if (Block_1 == Block_2 || Block_1 == Block_3 || (Block_1 - 1 == Block_2 || Block_1 - 1 == Block_3)) {
        Block_1 = randint(7, 10)
    }
    if (Block_2 < 0) {
        Block_2 = randint(12, 15)
        Schwierigkeit += 1
    }
    if (Block_2 == Block_1 || Block_2 == Block_3 || (Block_2 - 1 == Block_1 || Block_2 - 1 == Block_3)) {
        Block_1 = randint(12, 15)
    }
    if (Block_3 < 0) {
        Block_3 = randint(17, 20)
        Schwierigkeit += 1
    }
    if (Block_3 == Block_1 || Block_3 == Block_2 || (Block_3 - 1 == Block_1 || Block_3 - 1 == Block_2)) {
        Block_1 = randint(7, 10)
    }
})
basic.forever(function () {
    if (Geheim != 1) {
        if (Leben != 0) {
            led.unplot(1, höhe)
            höhe = höhe + neue_Höhe
            neue_Höhe = 0
            led.plot(1, höhe)
        }
        Speed = 500 - 50 * Schwierigkeit
    }
})
basic.forever(function () {
    if (Leben == 3) {
        basic.setLedColor(0x00ff00)
    }
    if (Leben == 2) {
        basic.setLedColor(0xffff00)
    }
    if (Leben == 1) {
        basic.setLedColor(0xff0000)
    }
    if (Leben == 0) {
        basic.showString("Verloren!!!")
    }
})
basic.forever(function () {
    if (höhe > 4) {
        höhe = 4
    }
})
basic.forever(function () {
    if (Geheim == 1) {
        if (randint(1, 2) == 1) {
            basic.showString("gewonnen!!!")
        } else {
            Leben = 0
        }
    }
})
loops.everyInterval(Speed, function () {
    if (Geheim != 1) {
        if (Leben != 0) {
            led.unplot(Block_3, 0)
            led.unplot(Block_3, 1)
            led.unplot(Block_3, 2)
            led.unplot(Block_3, 4)
            Block_3 += -1
            led.plot(Block_3, 0)
            led.plot(Block_3, 1)
            led.plot(Block_3, 2)
            led.plot(Block_3, 4)
            if (Block_3 == 1) {
                if (höhe != 3) {
                    Leben += -1
                }
            }
        }
        if (Leben != 0) {
            led.unplot(Block_1, 0)
            led.unplot(Block_1, 1)
            led.unplot(Block_1, 3)
            led.unplot(Block_1, 4)
            Block_1 += -1
            led.plot(Block_1, 0)
            led.plot(Block_1, 1)
            led.plot(Block_1, 3)
            led.plot(Block_1, 4)
            if (Block_1 == 1) {
                if (höhe != 2) {
                    Leben += -1
                }
            }
        }
        if (Leben != 0) {
            led.unplot(Block_2, 0)
            led.unplot(Block_2, 2)
            led.unplot(Block_2, 3)
            led.unplot(Block_2, 4)
            Block_2 += -1
            led.plot(Block_2, 0)
            led.plot(Block_2, 2)
            led.plot(Block_2, 3)
            led.plot(Block_2, 4)
            if (Block_2 == 1) {
                if (höhe != 1) {
                    Leben += -1
                }
            }
        }
    }
})
