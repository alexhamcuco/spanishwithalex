const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sesTransport = require('nodemailer-ses-transport');

const transporter = nodemailer.createTransport(
    sesTransport({
        rateLimit: 1,
    })
);

const path = require('path');
var hbs = require('express-handlebars');
require('dotenv').config();

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

// Alex - Change this back to a POST
// I was using a GET just because it was easier for my testing
// also, you may want to consider a moving all of these routes to a separate file
// controller/api.js

app.get('/send', (request, response) => {
    const mailOptions = {
        from: 'spanishwithalex.com', // sender address
        to: 'spanishwithalex.com', //
        subject: 'new student', // Subject line
        // you can modify the HTML below any way you like
        // such as adding in html tags
        // '</br></br>' +
        html:
            'This is being sent to you from Node Mailer.' +
            '</br></br>' +
            'I have checked in the working code.',
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, result) => {
        if (error) {
            console.log(error);
            // do something?
            response.send(500);
        }
        response.json('ok');
    });

    // console.log('Message sent: %s', info.messageId);
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // res.render('contact', { msg: 'Email has been sent' });
});

// listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
