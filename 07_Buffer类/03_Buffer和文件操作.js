const fs = require('fs');
fs.readFile('./foo.txt', {encoding: 'utf-8'}, (err, data) => {
  console.log(data);
  console.log(data.toString())
});