var fs = require('fs');
var path = process.argv[2];
var result = fs.readFileSync(path).toString().split('\n');
console.log(result.length-1);