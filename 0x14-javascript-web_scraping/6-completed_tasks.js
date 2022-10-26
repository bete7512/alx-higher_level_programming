#!/usr/bin/node
'use strict';
const request = require('request');
const fs = require('fs')

request(process.argv[2], { json: true }, (error, response, data) => {
  if (error) console.log(error); else {
    if (response.statusCode === 200) {
      const todos = {};

      data.forEach(todo => {
        if (todos[todo.userId] === undefined) todos[todo.userId] = 0;
        if (todo.completed === true) todos[todo.userId]++;
      });
      console.log(todos);
    }
  }
});
