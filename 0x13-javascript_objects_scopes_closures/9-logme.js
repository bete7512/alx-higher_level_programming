#!/usr/bin/node
'use strict';
const count = [];
exports.logMe = function (item) {
  console.log(count.length + ': ' + item);
  count[count.length] = item;
};
