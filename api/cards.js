const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Card = mongoose.model('Card');

router.post('/', (req, res) => {
  let newCard = new Card();
  newCard.name = req.body.name;
  newCard.user_id = req.body.userId;
  newCard.imageUrl = req.body.imageUrl
  newCard.save((err, nc) => {
    if(err) {
      res.send(err)
    } else {
      res.sendStatus(200);
    }
  })
})

router.get('/:id',(req, res) => {
  Card.find({user_id: req.params['id']}, ((err, cards) => {
    if(err) {
      res.send(err)
    } else {
      res.json(cards)
    }
  }))
})

module.exports = router;
