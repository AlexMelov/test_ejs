const express = require('express');

const router = express.Router();

router.get('/second-page', (req, res) => {
  res.render('pages/second-page');
});

module.exports = router;
