#!/usr/bin/python3
def print_last_digit(number):
    if number >= 0:
        num =  number % 10
    else:
        number = -number
        num = number % 10
    print(num, end='')
    return num
