const express = require('express');
const app = express();
const path = require('path');

// settings define una variable dentro de app para que siempre se inicie tenga acceso a la variable port.
app.set('port', 3000);
// set the starting path for the views
// view engine setup
app.set('views', './client/pages');
app.set('view engine', 'ejs');

//middlwares

// routes
app.use(require('./routes/controller'));

// set path for static assets
app.use(express.static('./client/content'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/images'));
// app.use('/content', express.static(__dirname + '/content')); //allow content folder to be used

// listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
