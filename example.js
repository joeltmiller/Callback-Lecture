var fs = require('fs');

var myNumber = undefined;

function addOne(callback) {
  // console.log('callback', callback);
  fs.readFile('input.txt', 'utf-8', function(err, fileContents){
    if(err){
      console.log(err);
    }
    console.log('File Contents', fileContents);
    myNumber = parseInt(fileContents);
    myNumber++;
    callback();
  })
}

function logResult(){
  // console.log('Here is your stuff!', stuff);
  console.log('logResult', myNumber);
}

addOne(logResult);

console.log('default', myNumber);
