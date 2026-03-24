/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Feb 2026
 * This program will let you play rock, paper, scissors.
*/

// variables and setup
let randomNumber: number = 0
let score: number = 0

    randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    })

// if randomNumber was 0
if (randomNumber == 0) {
    basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
    basic.pause(5000)
}

// if randomNumber was 1
if (randomNumber == 1) {
    basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
    basic.pause(5000)
}

// if randomNumber was 2
if (randomNumber == 2) {
    basic.showLeds (`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
    basic.pause(5000)
}

// winning a point
input.onButtonPressed(Button.A, function () {
    score + 1
    basic.showIcon(IconNames.Happy)
    })


// show your score
input.onButtonPressed(Button.B, function () {
    basic.showNumber(score)
    })
