#!/usr/bin/node
'use strict';
exports.converter = function (base) {
  return function (num) {
    return num.toString(base);
  };
};
