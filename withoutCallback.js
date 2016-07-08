var fs = require('fs');

var myNumber = undefined;

function addOne() {
  fs.readFile('input.txt', 'utf-8', function(err, fileContents){
    myNumber = parseInt(fileContents);
    myNumber++;
  })
}

addOne();

//Will be undefined because it will not wait for fs.readFile() to complete
console.log('myNumber', myNumber);
