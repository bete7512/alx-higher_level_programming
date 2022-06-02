#!/usr/bin/python3
import sys
num = len(sys.argv)
sum = 0
if num - 1 == 0:
    print("0")
else:
    for i in range(1, num):
        sum += int(sys.argv[i])
    print(sum)
