const http = require('http'); 
const dotenv = require('dotenv').config(); 
const fs = require('fs');

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


// FS changes here! 
/*try {
    fs.renameSync('after.json', 'before.json'); 
} catch (err) {
    console.error(err);
}
*/
const presentName = (jsonObject) => {
    let outputValue = jsonObject.name; 
    return outputValue; 
}

const jsonParser =  (fileReader) => {
    let dataObject = JSON.parse(fs.readFileSync(fileReader)); 

    return dataObject; 
}

const objectifyJson = (fileName, propertyName) => {
    let objectOutput = jsonParser(fileName);
    let keyValue = objectOutput.propertyName; 
}

try {
    presentName(objectifyJson('before.json'));
    
} catch (error) {
    console.error(error);
}