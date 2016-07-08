var fs = require('fs');

var myNumber = undefined;

function readFile(callback) {
  //The point we are making here is that you can pass in a function
  //instead of writing it inline here (see difference in other files)
  fs.readFile('input.txt', 'utf-8', callback)
}

//This is called after fs.readFile() is done reading the file
function handleFile(err, fileContents) {
  myNumber = parseInt(fileContents);
  myNumber++;
  logResult();
}

function logResult() {
  console.log('myNumber', myNumber);
}

//Call the function, passing the handleFile function
//to be called when the fs.readFile() is done reading
readFile(handleFile);
