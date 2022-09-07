#!/usr/bin/node
'use strict';
const words = 'C is fun';
if (!process.argv[2]) {
  console.log('Missing number of occurrences');
}
const j = process.argv[2];
let i = 0;
while (i < j) {
  console.log(words);
  i++;
}
