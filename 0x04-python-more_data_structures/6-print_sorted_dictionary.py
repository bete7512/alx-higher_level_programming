#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    x = sorted(a_dictionary)
    for key, value in x:
        print(key, ":", value)
