var fs = require ('fs');
var zlib = require('zlib');

var stream = fs.createReadStream("output.txt");

fs.createReadStream('output.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('output.txt.gz'));
  
console.log("File Compressed!.");