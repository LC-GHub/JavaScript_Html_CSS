const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, '/public')))
//Good practice: set public dir's path to /currDir/public (for our static asessts like css, imgs or javascript)




app.set('view engine', 'ejs');
//By default, Express will look for a folder name "views" for templates
//when a view engine is specified
app.set('views', path.join(__dirname, '/views'))
//Good practice: set views' path to /currDir/views.
//THis will allow us to run the index.js from anywhr in the file system,
//and index.js is still able to find the views folder.
//btw, __dirname is the current directory name (where this index.js is located)


app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.get('/', (req, res) => {
    res.render('home.ejs');;
})

app.get('/r/:subreddit', (req, res) => {
    //console.log(req.params)
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    //match data form our DB (as shown in "const data = redditData[subreddit]")
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }

})
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { rand: num });
})

app.get('/cats', (req, res) => {
    const cats = [
        'blue', 'Rocket', 'Monty', 'Steph', 'Winston'
    ]

    res.render('cats', { cats })
})