const express = require('express');
const userModel = require('../schema/mongo.schema')
const router = express.Router();

router.post('/third-page', (req, res) => {

  const { email, password } = (req.body);

  userModel.findOne(
      {
        email
      })
      .then(user =>
      {
        return { compare: compareSync(password, user.password), user };
      })
      .then(result =>
      {
        if(result.compare)
        {
          return res.status(200).json(
              {
                token: tokenHelper(result.user)
              });
        }
        return res.status(401).json(
            {
              message: tokenCompareErrorMessage
            });
      })
      .catch((error ) => res.status(401).json({ message: error.message }));
})

module.exports = router;
