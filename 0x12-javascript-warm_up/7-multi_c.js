#!/usr/bin/node
'use strict';
const words = 'C is fun';
const j = process.argv[2];
let i = 0;
while (i < j) {
  console.log(words);
  i++;
}
