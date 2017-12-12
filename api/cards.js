const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Card = mongoose.model('Card');

router.post('/', (req, res) => {
  let newCard = new Card();
  newCard.name = req.body.name;
  newCard.save((err, nc) => {
    if(err) {
      res.send(err)
    } else {
      res.sendStatus(200);
    }
  })
})

module.exports = router;
