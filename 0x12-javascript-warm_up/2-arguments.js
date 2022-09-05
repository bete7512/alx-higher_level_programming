#!/usr/bin/node
'use strict';
let words;
if(process.argv[1]){
    words = "No argument";
}
if(process.argv[2]){
     words = "Argument found";
}
if(process.argv[3]){
    words = "Arguments found";
}
console.log(words);