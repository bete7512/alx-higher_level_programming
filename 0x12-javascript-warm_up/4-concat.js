#!/usr/bin/node
'use strict';
let words;
if(process.argv[1]){
    words = 'undefined' + ' is undefined';
}
if(process.argv[2]){
    words = process.argv[2] + ' is undefined';
}
if(process.argv[3]){
    words = process.argv[2] + ' is ' + process.argv[3];
}
console.log(words);