#!/usr/bin/node
'use strict';
if (!process.argv[3]) {
  console.log(0);
} else {
  const a = process.argv;
  let highest = parseInt(a[2]);
  let second = parseInt(a[3]);
  if (second > highest) {
    highest = second;
    second = parseInt(a[2]);
  }
  let i = 3;
  while (parseInt(a[i])) {
    if (parseInt(a[i]) > highest) {
      highest = parseInt(a[i]);
    }
    i++;
  }
  i = 3;
  while (parseInt(a[i])) {
    if (second < parseInt(a[i]) && parseInt(a[i]) < highest) {
      second = parseInt(a[i]);
    }
    i++;
  }
  console.log(second);
}
