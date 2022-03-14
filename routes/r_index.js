const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Death Site' });
});
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});