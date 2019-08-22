// definining the requestListener callback!
const fs = require('fs');

module.exports = { //wrapped in a module.exports
    requestListener: (request, response) => {
        fs.readFile('./website.html', 'utf-8', (err, data) => {
            if (err) { // if there's an error, show an error
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(`${err}`);
                response.end();
            } else { // else write the content from the file
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            }
        });
    }
}
