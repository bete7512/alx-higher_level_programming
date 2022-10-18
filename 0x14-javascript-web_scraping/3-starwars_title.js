#!/usr/bin/node
'use strict';
const request = require('request');

request('http://swapi.co/api/films/' + process.argv[2], { json: true }, (error, response, b) => {
  if (error) console.log(error); else {
    if (response.statusCode === 200) console.log(b.title);
  }
});
