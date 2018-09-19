var fs = require('fs');

fs.open('openFile.txt','w+',function(err,file){
    if(err) throw err;
    console.log("Saved!");
});
fs.writeFile('openFile.txt',"New Content",function(err){
    if(err) throw err;
    console.log("Saved!");
});