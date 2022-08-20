//**Import statements */
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import {franc} from "franc";
const langs = require("langs");
const colors = require("colors")

//***Main*/
function getArgs_string(){
    if(process.argv.length > 2){
        const args = process.argv.slice(2);
        return args.join(' ');
    }
    else{
        return false;
    }
    
}
/**
 * 
 * @param {string} string - A string that user wants langauge detected for
 * @returns {string}  the detected language
 */

function getLang(string){
    const langCode = franc(string);
    // console.log(langCode);
    const langObj =  langs.where("3", langCode);
    if(!langObj){
        return "No language detected, try longer sentence"
    }else{
        return langObj.name;
    }
    
}


const sentence = getArgs_string();
console.log(getLang(sentence).yellow)

