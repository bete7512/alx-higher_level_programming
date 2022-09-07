#!/usr/bin/node
'use strict';
const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[3]);
if (!x || !y) {
  console.log('NaN');
} else {
  console.log(x + y);
}
