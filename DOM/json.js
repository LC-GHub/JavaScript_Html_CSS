//const data = '{"ticker":{"base":"BTC","target":"USD","price":"24134.65851114","volume":"7267.66806471","change":"-11.07550614"},"timestamp":1660713544,"success":true,"error":""}'

//JSON to JS object use JSON.parse(*data*)

//JS object to JSON use JSON.stringify()

//"https://swapi.dev/api/people/1/"

//========making request using XHR, which is outdated already,
//========good to know only.
//========For a more modern, faster way, refer to fetchAPI.js

const req = new XMLHttpRequest();
req.onload = function (){
    //if no error, run this function
    console.log("success");
    //console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data.name, data.height);
}

req.onerror = function (){
    //if there is an error, run this function
    console.log("error");
    console.log(this);
}
req.open("GET", "https://swapi.dev/api/people/1/")
req.send();

