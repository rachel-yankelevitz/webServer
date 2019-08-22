// servin some HTML!!!!

const http = require('http');

let {requestListener} = require('./callBack.js');
/* instead of defining callback listener in app.js, its a seperate file
see: callBack.js for the full callback listener */

// create a port to listen on
const PORT = process.env.PORT || 4001; // http://localhost:4001 on browser

const server = http.createServer(requestListener); // create the server

// initiate the server
server.listen(PORT);