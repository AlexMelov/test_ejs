const express = require('express');

const router = express.Router();
const submitHandler = require('../../public/script/functions');

router.get('/', (req, res) => {
  res.render('pages/home-page', {
    submit: submitHandler,
  });
});

module.exports = router;
