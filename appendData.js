var fs = require('fs');

fs.appendFile('openFile.txt',"This is new text.",function(err){
    if (err) throw err;
    console.log('Updated!');
});