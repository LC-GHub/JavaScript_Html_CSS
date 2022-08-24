const express = require("express");
const app = express();
// console.dir(app)

//.use() is a function that fires when we receive a request on our servers.
//req and res are objects Express auto create for us
// app.use((req, res) => {
//     console.log("we got a request")
//     // res.send({ color: 'red', })
// })
// ===========================================================
//Routing
//eg /cats => 'meow'
//eg /dogs => 'woof'
//eg / => 'meow'
//exact matches
app.get('/', (req, res) => {
    res.send('HOME PAGE!!!!HI')
})

app.get('/cats', (req, res) => {
    console.log('Cat req')
    res.send("<h1> MEOW </h1>")
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})
//specifying a URL pattern to match instead of exact match know as path parameters
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const {subreddit} = req.params;
    res.send(`this is the ${subreddit} page`)
    //res.send will return {subreddit : "cats"} if we do /r/cats
})

app.get('/search', (req, res) => {
    // console.log(req.query);
    const { q, colors } = req.query;
    res.send(`<h1>HI!, search result is ${colors} ${q}</h1>`);
})
//get everything else (default)
app.get('*', (req, res) => {
    res.send('CANNOT GET')
})
// ===========================================================



//.listen() is a function that helps us conitnuously listen on our server,
//on the port number specified
app.listen(3000, () => {
    console.log("Listening on port 3000")
})

