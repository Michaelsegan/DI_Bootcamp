const http = require('http');

const server = http.createServer((req,res) => {
    const user = {
        firstname: 'John',
        lastName:'Doe'
    }
res.setHeader('content-type', 'application/json');
res.end(JSON.stringify(user));

})
server.listen(8080); 
