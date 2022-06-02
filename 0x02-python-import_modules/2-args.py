#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    num = len(sys.argv)
    if num - 1 == 0:
        print("{}: arguments.".format(num - 1))
    elif num - 1 == 1:
        print("{} arguments:".format(num-1))
        print("{}: {}".format(num - 1, sys.argv[1]))
    else:
        for i in range(1, num):
            if i==1:
                print("{} arguments:".format(num - 1))
            print("{}: {}".format(i, sys.argv[i]))
