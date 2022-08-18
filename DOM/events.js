const v2 = document.querySelector("#v2");
// v2.onclick = () => {
//     console.log("V2 clicked");
// }

//OR

// v2.onclick = function(){
//     console.log("V2 clicked");
// }

// function scream() {
//     console.log("AHHHH");
// }

// v2.onmouseenter = scream;


//Event Listners(eg.element.addEventListener('click', () => *function*))
// const v3 = document.querySelector('#v3');

// function v3OnClickfirst(){
//     alert('clicked');
// }
// function v3OnClickNotfirst(){
//     alert("stop it leh!");
// }

// v3.addEventListener('click', v3OnClickfirst, { once: true });
// v3.addEventListener('click', v3OnClickNotfirst);

// const changeColorBtn = document.querySelector("#chgcolor");
// const header1 = document.querySelector("h1");
// const pageBody = document.querySelector("body");
// let MAX = 255;

// function getRandomInt(max){
//     return Math.floor(Math.random()*MAX);
// }

// changeColorBtn.addEventListener('click', () => {
//     let i = getRandomInt(255);
//     let j = getRandomInt(255);
//     let k = getRandomInt(255);
//     pageBody.style.backgroundColor = `rgb(${i},${j},${k})`;
//     header1.innerText = `\"rgb(${i},${j},${k})\"`
// })

// const button1 = document.querySelector('button').addEventListener('click', (e) => {
//     alert("click");
//     console.log(e);
// } )

// const input1 = document.querySelector('input').addEventListener('keydown', (e) => {
//     console.log("key down!");
//     console.log(e.code)
//     console.log(e.key)
// })

// const form1 = document.querySelector("#form1");
// const input1 = document.querySelector("#catsInput");
// const UL = document.querySelector("#cats");
// form1.addEventListener("submit", (e) => {
//     console.log("Form submitted");
//     e.preventDefault(); //prevent default action (eg. form submit will jump to another URL)
//     const newLI = document.createElement("LI");
//     newLI.innerText = input1.value;
//     UL.append(newLI);
//     input1.value = '';

// })

// const inputInTextBox = document.querySelector("#catsInput");
// input.addEventListener('change', function(e){
//     console.log('changed');
// })
// const header1 = document.querySelector("h1");
// inputInTextBox.addEventListener('input', function(e){
//     header1.innerText = inputInTextBox.value;
// })

const userInput = document.querySelector("#username");
const tweetInput = document.querySelector("#tweet");
const unordLi = document.querySelector("#tweets");
const form = document.querySelector("#form1");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newEntry = document.createElement("li");
    newEntry.innerText = `${userInput.value} - ${tweetInput.value}`;
    unordLi.appendChild(newEntry);
    userInput.value = '';
    tweetInput.value = '';
})

unordLi.addEventListener('click', (e) => {
    e.target.remove();
})

