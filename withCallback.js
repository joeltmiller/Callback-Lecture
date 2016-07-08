var fs = require('fs');

var myNumber = undefined;

//Although the function is called logResult, as a parameter,

function addOne(callback) {
  fs.readFile('input.txt', 'utf-8', function(err, fileContents){
    myNumber = parseInt(fileContents);
    myNumber++;
    callback();
  })
}

//This will work because it is called within the addOne function
//once it is complete reading the file's content
function logResult() {
  console.log('myNumber', myNumber);
}

//Call addOne() with the logResult function
addOne(logResult);
