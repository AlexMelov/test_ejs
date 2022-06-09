const express = require('express');
const router = express.Router();
const mongoModel = require('../schema/mongo.schema');

router.get('/second-page', (req, res) => {
  res.render('pages/second-page');
});
router.post('/second-page', (req) => {
  console.log(req.body);
});

module.exports = router;
