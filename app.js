const express = require('express')
const exphbs = require('express-handlebars');
const path = require('path')

const app = express()

// Express-Handlebars middleware
app.engine('handlebars', exphbs({
    defaultlayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')))

// index route
app.get('/', (req, res) => {
    res.render('pages/index')
})

// login route
app.get('/login', (req, res) => {
    res.render('pages/login')
})

// register route
app.get('/register', (req,res) => {
    res.render('pages/register')
})

const port = 3000

app.listen(port, () => {
    console.log('listening to 3000')
})