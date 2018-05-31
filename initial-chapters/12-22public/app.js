"use strict";
//Filesystem for reading files, modifying, deleting them
var fs= require("fs");


fs.writeFileSync("corn.txt", "Corn is good, corn is life");
console.log(fs.readFileSync("corn.txt").toString());


//path for working with file paths. It also normalizes the paths.  Run this in node and observe
var path = require('path');
// See how I intentionally put two slashes in the "oldApp" var.
var oldApp = "../initial-chapters//10-22public/app.js"
console.log(path.normalize(oldApp));
console.log(path.dirname(oldApp));
console.log(path.basename(oldApp));
console.log(path.extname(oldApp));

console.log(__dirname);
console.log(__filename);
