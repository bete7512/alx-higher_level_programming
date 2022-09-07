#!/usr/bin/node
'use strict';
let a = 'Not a number';
const n = parseInt(process.argv[2]);
if (!isNaN(n)) {
  a = 'My number: ' + n;
}
console.log(a);
