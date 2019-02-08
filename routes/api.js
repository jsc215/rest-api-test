const express = require('express');
const router = express.Router();
// const { ObjectID } = require('mongodb');
const { User, Stock } = require('../models/user');

router.get('/users', async (req, res) => {
  const users = await User.find()
    .populate('stock', 'Company Sector Ticker -_id')
    .select('firstName stock');
  res.send(users);
  console.log(users);
});

router.get('/stocks', async (req, res) => {
  const stocks = await Stock.find()
    .limit(100)
    .select('Company Sector Ticker');
  res.send(stocks);
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
