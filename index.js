const http = require('http'); 
const dotenv = require('dotenv').config(); 
const fs = require('fs');

const port = process.env.PORT || 3000; 
const env = process.env.NODE_ENV || "test"; 
const hostname = process.env.HOSTNAME || "host";

const server = http.createServer(
    (req,res) => {
        let htmlFile = '';
        console.log(`file Now is ${htmlFile}`);
        switch(req.url) {
            case '/':
                htmlFile = 'index.html'; 
                break;
            case '/home':
                    htmlFile = 'index.html'; 
                    break;
            case '/about': 
                htmlFile = 'about.html'; 
                break;
            case '/contact-me': 
                htmlFile = 'contact-me.html'; 
                break;
            
            default:
                htmlFile = '404.html';
                break;
        }
        if(htmlFile){
            console.log(`processing file ${htmlFile} `);
            renderPage(res, htmlFile); 
        }
    }
);

function renderPage(res, htmlFile) {
    const filePath = `./${htmlFile}`; 
    fs.stat(filePath, (stats, err) => {
        res.statusCode = 200; 
        res.setHeader('content-type', 'text/html'); 
        fs.createReadStream(htmlFile).pipe(res);
    })
}


server.listen(port, console.log(`Server is running ${env} in port ${port}`))