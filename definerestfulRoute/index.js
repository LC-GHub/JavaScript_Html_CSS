const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOvrride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
//Recap: app.use() runs a function on every single request (dosent matter get or post or whatever)
app.use(express.json());
app.use(methodOvrride('_method'))


let commentsArr = [
    {
        username: 'Todd',
        comments: 'LOL funny',
        id: uuid()
    },
    {
        username: 'Skylar',
        comments: 'my dogg',
        id: uuid()
    },
    {
        username: 'Sk8erBoi',
        comments: 'Todd, u think funneh',
        id: uuid()
    },
    {
        username: 'onlysaywoof',
        comments: 'woof woof woof',
        id: uuid()
    }
]



app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    //res.send("/POST tacos response")
    console.log(req.body)
    //req.body returns undefined by default,
    //hence, need to use "app.use(express.urlencoded({extended:true}));"
    //for parsing application/x-www-form-urlencoded (form data from website are in this format)

    const { qty, meat } = req.body;
    res.send(`i want ${qty} of ${meat} tacos`);
})

app.listen(3000, () => {
    console.log("listening on port 3000: DefineRestfulRoutes")
})
/***
 * eg.
GET /comments - list all comments
GET /comments/:id - get one comment using id
POST /comments - create a new comment
PATCH /commnets/:id - update one comment using id
DELETE /commnets/:id - Delte one comment using id
 */

app.get('/comments', (req, res) => {
    res.render('comments/index', { commentsArr })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    // console.log(req.body);
    const { username, comment: comments } = req.body;
    commentsArr.push({ username, comments, id: uuid() })
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    //id from the url can be found in req.params
    const { id } = req.params;
    const elefound = commentsArr.find(c => c.id === id);

    res.render('comments/show', { elefound });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const elefound = commentsArr.find(c => c.id === id);
    res.render("comments/edit", { elefound })
})

app.patch('/comments/:id/update', (req, res) => {
    //PATCH is to partially update or add on stuff to existing resource
    const { id } = req.params;
    const newComment = req.body.comments
    const elefound = commentsArr.find(c => c.id === id);
    elefound.comments = newComment;
    res.redirect("/comments");

})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    commentsArr = commentsArr.filter(c => c.id !== id);
    res.redirect('/comments');

})

