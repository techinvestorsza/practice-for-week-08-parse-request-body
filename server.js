const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require('http');

server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/x-www-form-urlencoded');

    let reqBody = '';

    req.on('data', (data) => {
        reqBody += data;
    })

    req.on('end', () => {
        console.log(req.method, ' ', req.url);

        req.body = parseBody(reqBody);

        sendFormPage(req, res) //needs to be called even if the request doesnt have a body
    });
});

const port = 5000;

server.listen(port, () => console.log('Successfully started the server on port ', port));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };