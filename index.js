const http = require('http'); 
const dotenv = require('dotenv').config(); 

const port = process.env.PORT || 3000; 


const server = http.createServer((req,res) => {
    res.statusCode = 200; 
    res.setHeader('content-type', 'text/html'); 
    res.end('<h1> Hello Word <h1/>');
}); 

const logServerStatus = (port) => {
    console.log(`Server running at port ${port}`);
}


server.listen(port, logServerStatus(port)); 