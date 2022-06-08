#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    square = []
    for i in matrix:
        row = []
        for j in i:
            row.append(j**2)
        square.append(row)
    return square
