#!/usr/bin/node
'use strict';
exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  list.forEach((e) => {
    if (e === searchElement) {
      count++;
    }
  });
  return count;
};
