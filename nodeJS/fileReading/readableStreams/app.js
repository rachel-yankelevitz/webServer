const readline = require('readline'); 
const fs = require('fs');

const myInterface = readline.createInterface({
    input: fs.createReadStream('shoppingList.txt')
  });

const printData = (data) => {
    console.log(`Item: ${data}`);
};

// now invoke the function using the on() event callback
myInterface.on('line', printData);

