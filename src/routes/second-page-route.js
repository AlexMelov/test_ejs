const express = require('express');

const router = express.Router();
const MongoModel = require('../schema/mongo.schema');

router.get('/second-page', (req, res) => {
  res.render('pages/second-page');
});
router.post('/second-page', (req, res) => {
  const auth = new MongoModel(req.body);
  auth.save().then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
