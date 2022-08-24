const fs = require('node:fs');
const foldername = process.argv[2] || 'Project'

try{
    fs.mkdirSync(foldername);
    fs.writeFileSync(`${foldername}/index.html`, "");
    fs.writeFileSync(`${foldername}/styles.css`, "");
    fs.writeFileSync(`${foldername}/app.js`, "");
}catch (e){
    console.log('Error occured: ', e);
}




