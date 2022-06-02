#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    num = len(sys.argv)
    if num != 4:
        exit(1)
    else:
        ch = sys.argv[2]
        if ch == '+':
            sum = int(sys.argv[1]) + int(sys.argv[3])
            print("{} {} {} = {}".format(int(sys.argv[1]), ch, int(sys.argv[3]), sum))
        elif ch == '*':
            a = int(sys.argv[1])
            b = int(sys.argv[3])
            mul = a * b
            print("{} {} {} = {}".format(a, ch, b, mul))
        elif ch == '/':
            div = int(sys.argv[1]) / int(sys.argv[3])
            print("{} {} {} = {}".format(int(sys.argv[1]), ch, int(sys.argv[3]), div))
        elif ch == '-':
            sub = int(sys.argv[1]) - int(sys.argv[3])
            print("{} {} {} = {}".format(int(sys.argv[1]), ch, int(sys.argv[3]), sub))
        else:
            print("enter valid operator")
            exit(1)

