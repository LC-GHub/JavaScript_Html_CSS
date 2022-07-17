// const numbers = [1,2,3,4,5,6,7,8,9,10]

// // numbers.forEach(function(element){
// //     console.log(element);
// //     console.log("------");
// // })

// const evenArray = numbers.map(function(num){
//     return num+num;
// })


// const names = ["Jack", "Mike", "Jason"]

// names.forEach(function(name){
//     console.log(`Hi ${name}, you won 1 BTC`);
// })


//Arrow Functions =>

// const add = function(x,y){
//     return x + y;
// }

// const additon = (x,y) => {
//     return x+y;
// }

// //Arrow Functions with implicit returns

// const rollDie = () =>(
//     Math.floor(Math.random()*6)+1
// )

// const add = (a,b) => a + b


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// const newMovies = movies.map((movie) => {
//     return `{movie.title} - ${movie.score / 10}`
// })


//setTimeout function=====

// setTimeout(() => {
//     console.log("Hello")
// }, 3000)

//setInterval function=====

// const id = setInterval(() => {
//     console.log(Math.random())
// },2000); 
//setInterval returns an ID

//use clearInterval(ID) to stop setInterval()

//filter function==============

// const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];


// let evenArray = number.filter((nums) => {
//     return (nums % 2 === 0&&nums <=10);
//     //will only return if nums%2 === 0  is true
// })


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// const highRatedMovies = movies.filter((movie) => {
//     return (movie.score > 80);
//     //What is means: "return movie if movie.score > 80"
// })

// const highRatedTitles = highRatedMovies.map((movie) => {
//     return movie.title;
// })


//Every and Some functions======

//Reduce function==============

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];


// let pricetotal = prices.reduce((total, currP) => {
//     return total+currP;
// })

// let minPrice = prices.reduce((min, currP) => {
//     if(currP < min){
//         return currP; //return (min = currP)
//     }else{
//         return min;
//     }
// })

// let best = movies.reduce((bestmovie, Currmovie) => {
//     if(Currmovie.score > bestmovie.score){
//         return Currmovie;
//     }else{
//         return bestmovie;
//     }
// })

