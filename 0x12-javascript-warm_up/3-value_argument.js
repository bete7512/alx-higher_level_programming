#!/usr/bin/node
'use strict';
let words;
if (process.argv[1]) {
  words = 'No argument';
}
if (process.argv[2]) {
  words = process.argv[2];
}
console.log(words);
