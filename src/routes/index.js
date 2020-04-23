
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', { title: 'Spanish with Alex' });
});

router.get('/contact', (req, res) => {

    res.render('contact', { title: 'pagina de contacto de mierda' });
});

module.exports = router;