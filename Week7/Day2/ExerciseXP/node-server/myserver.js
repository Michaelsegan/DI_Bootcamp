const http = require('http');

const server = http.createServer((req,res) => {
res.setHeader('content-type', 'text/html');
res.end(`<h1>hello my first one from server</h1>`);

})





server.listen(3000); 


