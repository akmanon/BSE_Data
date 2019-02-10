const fs = require('fs');
const axios = require('axios');
const _ = require('lodash');
const symbol = require('./symbols.json')
let data1  =_.map(symbol, _.partialRight(_.pick, ['LongName', 'ScripName', 'Symbol', 'Volume', 'TurnOver', 'MCapFull']));
console.log(data1);
fs.writeFile('./Symbol/symbol.json', JSON.stringify(data1), 'utf-8', function (err) {
    if (err) throw err;
    console.log('Done!');
  })
