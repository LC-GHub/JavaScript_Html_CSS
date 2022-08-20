//index.js is the "entry point" or main file of a directory, when someone require an entire directory
//JS will look for a index.js file.

const blue = require('./blue');
const sadie = require('./sadie');
const janet = require('./janet');


const cats = [blue, sadie, janet]
// console.log(cats);


module.exports = cats;