var fs = require('fs');

fs.open('openFile.txt','w+',function(err,file){
    if(err) throw err;
    console.log("Saved!");
});