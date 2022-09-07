#!/usr/bin/node
'use strict';
const n = parseInt(process.argv[2]);
let s = '';
let x = 0;
let y = 0;
if (isNaN(n)) {
  console.log('Missing size');
} else {
  while (x < n) {
    s += 'X';
    x++;
  }
  while (y < n) {
    console.log(s);
    y++;
  }
}
