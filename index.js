const http = require('http'); 
const dotenv = require('dotenv').config(); 
const fs = require('fs');
const { Console } = require('console');
const { stderr } = require('process');

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

const readFile = (filePath) => {
    const rawData = fs.readFileSync(`./${filePath}`);
    const fileContent = JSON.parse(rawData)[0];
    console.log(fileContent);

    return fileContent;
}

const personalInfo = readFile('before.json');


const getKeyType = (obj) => {

    //External validator for the number of keys, it should be one only! 

    const objectLength = Object.keys(obj).length; 
    console.log(`object length is :${objectLength}`);

    let result = {}; 
    let objectKey = Object.keys(obj);
    let objectType = typeof obj; 

    result.key = objectKey; 
    result.type = objectType; 
    return result; 
}

const getObjectName = (jsonObject) => {
    let test = getKeyType(jsonObject); 

    if (test.type ==! "object")
        return "default";

    let key = test.key; 

    return key; 
}


const logObjectFile = new Console({
    stdout: fs.createWriteStream("./jsonObjects/objectName.js"), 
    stderr: fs.createWriteStream("./jsonObjects/error.js"),
})

const writeObjectFile = (obj) => {

    const objectName = getObjectName(obj)[0];
    const output = JSON.stringify(obj)
    const objectOutput = Object.values(obj)[0]; 
    try {
        fs.writeFileSync(`./jsonObjects/${obj}.json`, output)
        
        logObjectFile.log("export const ", objectName ," = ",objectOutput);
    } catch (error) {
        console.error(error);
    }
}

writeObjectFile(personalInfo);