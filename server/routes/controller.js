const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Spanish with Alex' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact me' });
});

router.get('/materials', (req, res) => {
    res.render('materials', { title: 'Materials to learn' });
});

router.get('/servsestar', (req, res) => {
    res.render('servsestar', { title: 'Materials to learn' });
});

router.get('/servsestar2', (req, res) => {
    res.render('servsestar2', { title: 'Materials to learn' });
});

router.get('/policy', (req, res) => {
    res.render('policy', { title: 'policy' });
});

router.get('/prueba', (req, res) => {
    res.render('prueba', { title: 'Materials to learn' });
});

module.exports = router;
