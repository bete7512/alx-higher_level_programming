#!/usr/bin/python3
for c in range(0, 9):
    for i in range(c + 1, 10):
        if c == 8:
            print("{}{}".format(c, i))
        else:
            print("{}{}".format(c, i),end=", ")
