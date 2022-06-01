#!/usr/bin/python3
def uppercase(str):
    for c in str:
        if ord(c) >= ord('a') and ord(c) <= ord('z'):
            holder = chr(ord(c) - 32)
        else:
            holder = c
        print("{:s}".format(holder), end="")
    print("")
