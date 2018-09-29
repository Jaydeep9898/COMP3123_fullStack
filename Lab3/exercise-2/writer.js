const fs = require('fs');

const file = fs.createWriteStream('./writer.txt');

var writeData = function(){

    for(let i=0; i<=10; i++){
        file.write("This is line number: "+i+"\n");
    }
    file.end();
}
module.exports = {
    writeData: writeData
}