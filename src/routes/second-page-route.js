const express = require('express');

const router = express.Router();

router.get('/second-page', (req, res) => {
  res.render('pages/second-page')
});
router.post('/second-page', (req, res) => {
  console.log(req.body);
});

module.exports = router;
