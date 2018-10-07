var fs = require ('fs');


var Readstream = fs.createReadStream("data.txt");
var WriteStream = fs.createWriteStream("output.txt")
 
Readstream.on("data", function(data) {
    console.log(data.toString());
    WriteStream.write(data);

    
})
Readstream.on('end', function() {
    WriteStream.end();
    console.log("Write is completed!.");
})