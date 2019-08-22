## Node File System

## Background
The Javascript backend Node allows for a less restrictive file system interaction than the traditional sandboxing. 

## FS core Module
The Node fs core module is an API for interacting with the file system. It was modeled after the POSIX standard for interacting with the filesystem.

Each method available through the fs module has a synchronous version **AND** an asynchronous version! 

One method available on the fs core module is the .readFile() method which reads data from a provided file:

```javascript
const fs = require('fs'); // first require the fs core module

let readDataCallback = (err, data) => { // define error-first calback (error first and then {data})
  if (err) {
    console.log(`Something went wrong: ${err}`); //if error occurrs, print "something went wrong"
  } else {
    console.log(`Provided file contained: ${data}`); // otherwise print provided file in data
  }
};

fs.readFile('./file.txt', 'utf-8', readDataCallback); // then invoke the readFile() method
/* note that the readFile() method has 3 arguments: path to file, char encoding, callback function
```

## The readFile() function
The structure of the `readFile()` function takes 3 arguments:
```javascript
fs.readFile('./file.txt', 'utf-8', readDataCallback);
```

1.  A string that contains path *TO* the file
2.  A string specifying the files character encoding (typically 'utf-8' for text files)
3.  The third argument is a callback function invoked when the **Asynchronous** task of reading the file system is complete.

## Readable Streams
Streams can be used to simplify reading files line-by-line. The `.createInterface()` method can be used from the `readline` core module. The `createInterface()` returns an `eventEmitter` that is set up to emit `line` events.

```javascript
// step 1: require the readline AND fs modules
const readline = require('readline'); 
const fs = require('fs');

/* step 2: assign myInterface the returned value of invoking `createInterface()` method and use the input of fs.createReadStream('text.txt') where 'text.txt' is our text file */
const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt')
});

/* step 3: assign a listener callback `on()` event will be emitted after each line is read*/
myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`); // the callback will log each file line to the console along with string ("The line read..")
});
```

## Writeable Streams
We can create a *writeable* stream to a file using the `fs.createWriteStream()` like the below:

```javascript
const fs = require('fs')

const fileStream = fs.createWriteStream('output.txt'); // output file

fileStream.write('this is the first line'); //writing first line using write() method
fileStream.write('this is the second line'); //writing second line 
fileStream.end(); //use the end method to stop
```
