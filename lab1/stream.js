var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');

readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});


var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'utf8');
writeStream.end();

writeStream.on('finish', function () {
    console.log("写入完成");
});

writeStream.on('error', function (err) {
    console.log(err.stack);
});