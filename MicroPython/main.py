"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
import time
import random

# variables and setup
random_number = -1
score = -1

display.clear()
display.show(Image.HAPPY)

while True:
    if accelerometer.is_gesture("shake"):
        random_number = random.randint(0, 2)
        display.clear()

        # if random number is 0
        if random_number == 0:
            display.show(Image.SQUARE_SMALL)

        # if random number is 1
        if random_number == 1:
            display.show(Image.SQUARE)

        # if random number is 2
        if random_number == 2:
            my_image = Image(
                "99009:"
                "99090:"
                "00900:"
                "99090:"
                "99009:")
            display.show(my_image)
        time.sleep(5)
        display.clear()
        display.show(Image.HAPPY)

        