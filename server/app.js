

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const path = require('path');
var hbs = require('express-handlebars');

const configPath = dotenv.config({
    path: path.join(__dirname + '/config/config.env'),
});

if (configPath.error) {
    throw configPath.error;
}
const email = require('./email');

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
        layoutsDir: './client/pages',
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

app.post('/send', (request, response) => {
    // call email to send an email
    email.sendEmail(request.body.email, request.body.message);

    // response.send('Email is sent!');

    // console.log('Message sent: %s', info.messageId);
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    response.redirect('emailConfirmation');
    // response.render('contact', { msg: 'Email has been sent' });
});

// listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});


