## Creating an HTTP Server

There is a designated Node core module specifically for the needs of an http module. This module contains functions that simplify the interaction with HTTP and streamline the receipt of and response to requests.

## createServer method
The `http.createServer()` method returns an instance of an `http.server`. An `http.server` has a method `.listen()` that causes the server to "listen" for incoming connections.

When the `http.createServer()` is run, we pass in a custom callbackFunction that is often referred to as the `requestListener`. It gets triggered when the server is listening and receives a new request.

## How the requestListener() works
This function expects **TWO Arguments**: a request object and a response object

*   When a request is made to the server, node invokes the provided `requestListener` callback function and passes in the request and response objects in the incoming request.

*   The request and response objects have their own properties and methods and the `requestListener` function can access information about the request.

*   The `requestListener` sets the response header and the body.
*   The `requestLisener` also must signal that the interaction is complete by calling the `response.end` method.

```javascript
/* Step 1: require http module */
const http = require('http'); 

/* Step 3: invoke createServer() with requestListener callback (similar to .on() ) */
let requestListener = (request, response) => {
    response.writeHead(200, {'Content=Type': 'text/plain'}); // make changes to response object (see `response.write, response.end`)
    response.write('Hello World!\n');
    respnose.end();
};
/*Step 2: create a server variable assigned to the create() server method*/
const server = http.createServer(requestListener);

server.listen(3000); /* Starts the server on port 3000 */
```
