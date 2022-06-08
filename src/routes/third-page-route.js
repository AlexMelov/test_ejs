const express = require('express');

const router = express.Router();

router.get('/third-page', (req, res) => {
  res.render('pages/third-page');
});

module.exports = router;
