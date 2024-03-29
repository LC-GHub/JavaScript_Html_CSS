//===fetch returns a promise.
// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log('resolved');
//         console.log(res);
//         //res.json() returns a promise
//         return res.json()
//     })
//     .then((data) => {console.log(data)})
//     .catch((err) => {
//         console.log("ERROR");
//         console.log(err);
//     })


// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log('resolved');
//         console.log(res);
//         //res.json() returns a promise
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//         return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then((res2) => {
//         console.log("resolved2")
//         return res2.json();
//         //*var*.json returns a promise
//     })
//     .then((data2) => {
//         console.log(data2)
//     })
//     .catch((err) => {
//         console.log("ERROR");
//         console.log(err);
//     })


const loadStarwars = async () => {
    try{
        const res = await fetch("https://swapi.dev/api/people/1/");
        //wait for fetch() to return a promise
        const data = await res.json()
        //wait for *var*.json() to return a promise
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/")
        const data2 = await res2.json();
        console.log(data2);
    } catch(e) {
        console.log(e);
    }

}

loadStarwars();