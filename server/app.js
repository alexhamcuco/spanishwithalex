const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
var hbs = require('express-handlebars');

// settings define una variable dentro de app para que siempre se inicie tenga acceso a la variable port.
app.set('port', 3000);
// set the starting path for the views
// view engine setup
app.engine(
    'hbs',
    hbs({
        extname: 'hbs',
        defaultLayout: 'layout',
        // problem here, I had to do a shitty fix
        //don't know how to set the folder properly
        layoutsDir: __dirname + '/layouts',
    })
);

// Body Parser Middlewre
// parser application /x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));

// parser application/json
app.use(bodyParser.json());

// //if you configure Exprees to look for views in a custom location, y'll need to felect that by passin an updated
// path as teh layoutsDir porperty in your configuracion. partialsDir="views/partials/"
app.set('views', `./client/pages`);
app.set('view engine', 'hbs');

//middlwares

// routes
app.use(require('./routes/controller'));

// set path for static assets
app.use(express.static('./client/content'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/images'));
// app.use('/content', express.static(__dirname + '/content')); //allow content folder to be used

//mailing set up, porst=route submition
app.get('/', (req, res) => {
    res.render('contact');
});

app.post('/send', (req, res) => {
    console.log(req.body);
});

// listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
