
var fs = require('fs');
var path = require('path');

var fileName = "2f9648ac-d628-4dd3-a936-5d8a8e96c232.jpeg";

var sourceFile = path.join(__dirname,'app/public/temp/2019/08/26/18/2f9648ac-d628-4dd3-a936-5d8a8e96c232.jpeg');
 

var destPath = path.join(__dirname, "uploads", fileName);

 

fs.rename(sourceFile, destPath, function (err) {
  
  fs.stat(destPath, function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});