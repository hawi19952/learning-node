const http = require('http'); 
const dotenv = require('dotenv').config(); 

const port = process.env.PORT || 3000; 
const env = process.env.NODE_ENV || "test"; 



const server = http.createServer(
    (req,res) => {
        res.statusCode = 200; 
        res.setHeader = ('content-type', 'text/html'); 
        res.end('<h1> Hello World <h1/>');
    }
);


server.listen(port, console.log(`Server is running ${env} in port ${port}`))