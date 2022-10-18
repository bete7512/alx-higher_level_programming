#!/usr/bin/node
'use strict';
const fs = require('fs');
const request = require('request');

request(process.argv[2], (error, response, data) => {
  if (error) {
    console.log(error);
  } else {
    if (response.statusCode === 200) {
      fs.writeFile(process.argv[3], data, (err, res) => {
        if (err) console.log(err);
      });
    }
  }
});
