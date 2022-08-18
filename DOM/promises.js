//==========creating our own promises=================
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand  = Math.random();
//         setTimeout(() => {
//             if(rand < 0.7){
//                 resolve('your info on logitech');
//             }
//             else{
//                 reject('ERROR 404');
//             }
            
//         }, 1000)
//     })
// }

// fakeRequest('google.com/logitech')
// .then((succ) => {
//     console.log("here is logitech on google.com: ", succ);
// })
// .catch((err) => {
//     console.log("error occured: ", err);
// })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }



// delayedColorChange('red', 1000)
// .then(() => {return delayedColorChange('orange',1000)})
// .then(() => {delayedColorChange('green', 1000)})

//==========Async functions=================

// async function hello(){

// }

// const sing = async () => {
//     throw "OH NO"
//     return 'lalala2';
// }

// sing()
//     .then((ret) => {
//     console.log(ret);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// const login = async (us,pw) => {
//     if(!us || !pw){
//         throw 'missing cred'
//     }
//     if(pw === '123'){
//         return 'Welcome'
//     }
//     throw 'invalid password'
// }

// login('lionel', '123')
// .then((succ) => {
//     console.log('logged in,', succ);
// })
// .catch((err) => {
//     console.log(err);
// })

// async function hello(){
    
// }

// const sing = async () => {
//     return 'lalala'
// }

// sing()
//     .then((data) => {
//         console.log(data)
//     })


// async function login(us, pw){
//     if(!us || !pw){
//         throw 'Missing credentials';
//     }
//     if(pw != '123'){
//         throw 'wrong password';
//     }
//     return 'Welcome';
// }

async function delayedColorChange(color, delay){
    setTimeout(()=>{
        document.body.style.backgroundColor = color
    }, delay)

    return 'changed'
}
delayedColorChange('red', 1000)
    .then(() => {delayedColorChange('blue', 1000)})
    .then(() => {delayedColorChange('yellow', 1000)})