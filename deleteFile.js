var a = require("./fileCreate.js")

//var fs = require('fs');
a.fs.unlink('mynewfile1.txt',function(err){
    if (err) throw err;
    console.log('File Deleted!');
});