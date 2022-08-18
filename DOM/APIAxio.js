//https://swapi.dev/api/people/1/
// axios.get("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("response", res);
//     //res should already contain data field with stuff we want
//     // compared to normal fetch that don't have.
// })

async function getdata(url){
    try{
        const res = await axios.get(url);
        console.log(res.data);
    }catch (e){
        alert(e);
    }

}

//========setting headers with Axios===========
const jokes = document.querySelector('#jokes');
const button1 = document.querySelector('button');
const addNewJoke = async () => {
    const newJoke = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.innerText = newJoke;
    jokes.append(newLi);
}
const getDadJoke = async () =>{
    try {
        const headersInfo = {
            headers: {Accept: "application/json"}
        }
        const res = await axios.get("https://icanhazdadjoke.com/", headersInfo);
        console.log(res);
        return res.data.joke
    }catch (e){
        return "no jokes avail";
    }
    
}

button1.addEventListener("click", addNewJoke);
