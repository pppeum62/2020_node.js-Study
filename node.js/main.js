// main.js

var fs = require("fs");

fs.readFile('C:/2020_node.js-Study/node.js/hello.txt', encoding = 'utf-8', function(err, data) {
    if(err) {
        throw err;
    }
    console.log(data + " Node.js!");
});