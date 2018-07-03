const express = require('express');
const router = express.Router();
// const { ObjectID } = require('mongodb');
const { User } = require('../models/user');
// const { Stock } = require('../models/user');

router.get('/users', async (req, res) => {
  const users = await User.find()
    .populate('stock', 'Country Ticker Sector -_id')
    .select('firstName stock');
  res.send(users);
  console.log(users);
});

router.post('/users', (req, res) => {
  let user = new User({
    firstName: req.body.firstName,
    stock: req.body.stock
  });

  user.save().then(
    (doc) => {
      res.send(doc);
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});

module.exports = router;
