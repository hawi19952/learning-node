const http = require('http'); 
const dotenv = require('dotenv'); 

const port = process.env.PORT || 3000; 
const env = process.env.NODE_ENV || "test"; 



const server = http.createServer()