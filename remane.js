var a = require("./fileCreate.js")

//var fs = require('fs');
a.fs.rename('openFile.txt','renamedFile.txt',function(err){
    if (err) throw err;
    console.log('File Renamed!');
});