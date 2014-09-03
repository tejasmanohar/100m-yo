#! /usr/bin/env node

'use strict';

// Load API Keys
var keys = [
  process.env.KEY_ONE,
  process.env.KEY_TWO,
  process.env.KEY_THREE,
  process.env.KEY_FIVE,
  process.env.KEY_SIX,
  process.env.KEY_SEVEN,
  process.env.KEY_EIGHT,
  process.env.KEY_NINE,
  process.env.KEY_TEN,
  process.env.KEY_ELEVEN,
  process.env.KEY_TWELVE,
  process.env.KEY_THIRTEEN,
  process.env.KEY_FOURTEEN,
  process.env.KEY_FIFTEEN,
  process.env.KEY_SIXTEEN,
  process.env.KEY_SEVENTEEN,
  process.env.KEY_EIGHTEEN,
  process.env.KEY_NINETEEN,
  process.env.KEY_TWENTY,
  process.env.KEY_TWENTY_ONE,
  process.env.KEY_TWENTY_TWO,
  process.env.KEY_TWENTY_THREE,
  process.env.KEY_TWENTY_FOUR,
  process.env.KEY_TWENTY_FIVE,
  process.env.KEY_TWENTY_SIX,
  process.env.KEY_TWENTY_SEVEN,
  process.env.KEY_TWENTY_EIGHT,
  process.env.KEY_TWENTY_NINE,
  process.env.KEY_THIRTY,
  process.env.KEY_THIRTY_ONE,
  process.env.KEY_THIRTY_TWO,
  process.env.KEY_THIRTY_THREE,
  process.env.KEY_THIRTY_FOUR,
  process.env.KEY_THIRTY_FIVE,
  process.env.KEY_THIRTY_SIX,
  process.env.KEY_THIRTY_SEVEN,
  process.env.KEY_THIRTY_EIGHT,
  process.env.KEY_THIRTY_NINE,
  process.env.KEY_FOURTY,
  process.env.KEY_FOURTY_ONE,
  process.env.KEY_FOURTY_TWO,
  process.env.KEY_FOURTY_THREE,
  process.env.KEY_FOURTY_FOUR,
  process.env.KEY_FOURTY_FIVE,
  process.env.KEY_FOURTY_SIX,
  process.env.KEY_FOURTY_SEVEN,
  process.env.KEY_FOURTY_EIGHT,
  process.env.KEY_FOURTY_NINE,
  process.env.KEY_FIFTY,
  process.env.KEY_FIFTY_ONE,
  process.env.KEY_FIFTY_TWO,
  process.env.KEY_FIFTY_THREE,
  process.env.KEY_FIFTY_FIVE,
  process.env.KEY_FIFTY_SIX,
  process.env.KEY_FIFTY_SEVEN,
  process.env.KEY_FIFTY_EIGHT,
  process.env.KEY_FIFTY_NINE,
  process.env.KEY_SIXTY
];

// Load usernames
var names = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

for (var key in keys) {
  var yo = (function() {
    var Yo = require('yo-api');
    return new Yo(key);
  })();

  for (var name in names) {
    letsYo(name);
  } 
}

function letsYo(username) {
  yo.yo(username, function(err, res, body) {
    if (err) {
      return console.log('Wtf just happened?');
    }
    else {
      return console.log('#hellyeah'); 
    }
  });
}
