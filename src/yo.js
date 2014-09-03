#! /usr/bin/env node

'use strict';

var request = require('request');

request.post({
  url: 'https://api.justyo.co/yo/',
}, function(err, res, body) {
  if (!error && response.statusCode == 200) {
    return console.log('#hellyeah');
  }
  else {
    return console.log('Um, what just happened? O.o');
  }
});