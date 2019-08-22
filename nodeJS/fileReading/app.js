const fs = require('fs');

// define a callback
let readDataCallback = (err, data) => {
    if (err) {
      console.log(`Something went wrong!!!: ${err}`);
    } else {
      console.log(`Here is some text: ${data}`);
    }
  }; 

// now try to read the file
fs.readFile('./myFile.txt', 'utf-8', readDataCallback);

