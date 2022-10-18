#!/usr/bin/node
'use strict';
const request = require('request');
const fs = require('fs');

request(process.argv[2], { json: true }, (error, response, data) => {
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
