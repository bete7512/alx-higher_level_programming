#!/usr/bin/python3
def delete_at(my_list=[], idx):
    if idx < 0 or idx >= len(my_list):
        return my_list
    newlist = []
    for i in range(len(my_list)-1):
        if idx == i:
            continue
        newlist.append(my_list[i])
    return newlist
