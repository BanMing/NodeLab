var fs = require("fs");

var data = fs.readFileSync('input.txt');
console.log(data.toString());


fs.readFile('input.txt', function (err, dataStr) {
    if (err) return console.error(err);
    console.log(dataStr.toString());
});
