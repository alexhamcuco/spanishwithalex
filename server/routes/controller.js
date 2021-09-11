const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

router.get('/materials', (req, res) => {
    res.render('materials', { title: 'Materials' });
});

router.get('/materials1', (req, res) => {
    res.render('materials', { title: 'Materials to learn1' });
});

router.get('/materials2', (req, res) => {
    res.render('materials', { title: 'Materials to learn2' });
});

router.get('/emailConfirmation', (req, res) => {
    res.render('emailConfirmation', { title: 'Gracias' });
});

router.get('/servsestar', (req, res) => {
    res.render('servsestar', { title: 'Materials to learn' });
});

router.get('/LasVocales', (req, res) => {
    res.render('LasVocales', { title: 'Materials to learn' });
});
router.get('/FalsosAmigos', (req, res) => {
    res.render('FalsosAmigos', { title: 'Materials to learn' });
});

router.get('/policy', (req, res) => {
    res.render('policy', { title: 'policy' });
});

router.get('/prueba', (req, res) => {
    res.render('prueba', { title: 'Materials to learn' });
});

module.exports = router;
