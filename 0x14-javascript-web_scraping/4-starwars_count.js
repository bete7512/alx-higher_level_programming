#!/usr/bin/node
'use strict';
const request = require('request');

request(process.argv[2], { json: true }, (error, response, data) => {
  if (error) console.log(error); else {
    if (response.statusCode === 200) {
      let count = 0;
      data.results.forEach(films => {
        films.characters.forEach(char => {
          if (char.search('18') > 0) {
            count++;
          }
        });
      });
      console.log(count);
    }
  }
});
