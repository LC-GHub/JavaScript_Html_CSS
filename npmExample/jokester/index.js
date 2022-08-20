const joke = require('give-me-a-joke');
const colors = require('colors');
const cw = require('cowsay');

// joke.getRandomCNJoke((jokeReturned) => {
//     console.log(jokeReturned);
// })

function getJoke(jokeReturned){
    console.log(jokeReturned.rainbow);
}

joke.getRandomCNJoke(getJoke)

