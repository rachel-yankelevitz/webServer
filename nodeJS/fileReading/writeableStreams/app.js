const fs = require('fs');
const readline = require('readline');


const fileStream = fs.createWriteStream('shopResults.txt'); // file we'll be writing TO

// also create an interface for reading an initial file (the shopList.txt file)
const Interface = readline.createInterface({
    input:
    fs.createReadStream('shopList.txt')
});


/* listener callback that receives data (line) and then writes it out */
let transformData = (line) => {
    fileStream.write(`They were out of: ${line}\n`);
}

// now assign transformData to execute when line event is read
Interface.on('line', transformData); // note first arg string, second arg callback
