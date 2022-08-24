//default parameter (numSide defaults to 6 if not defined)======

// function rollDie(numSides = 6){
//     return Math.floor(Math.random()*numSides)+1;
// }


// function greet( name, greeting = "Hello"){
//     console.log(`${greeting}, ${name}`);
// }

// //Spread function=========

// //use case 1: use it to convert array...
// //into multiple individual element for a function
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(Math.max(...nums))

// //use case 2: use it to join arrays tgt into a single array..
// // or use it to copy array into another array.
// const cat = ['Blue', 'Scout', 'Rocket']
// const dogs = ['Rusty', 'Wyatt']
// const pets = [...cat, ...dogs]


// //Rest function======
// function sum(...nums){
//     //Rest function (...arg) will collect all arguments..
//     //and put it into an array
//     return nums.reduce((sum, ele) =>{return sum+ele})
// }

// const numbers = [1,2,3,4,5,6,7,10,2,2,3,4,1,1,2,3]

//Array destructing=====
const numbers = [1,2,3,4,5,6,7,10,2,2,3,4,1,1,2,3]

const [gold,silver] = numbers;


const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

//const {email, password, firstName,born: birthYear, ...theRest} = user;

// function fullName(user){
//     const {firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`
}

