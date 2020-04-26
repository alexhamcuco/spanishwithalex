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

module.exports = router;
