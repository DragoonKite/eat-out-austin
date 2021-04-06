const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, User, Review} = require('../models');

router.get('/', (req, res) => {
    Restaurant.findAll()
    .then(homeData => {
        res.render('homepage');
        // res.json(homeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  
router.get('/:id', (req, res) => {
    Restaurant.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }})
    .then(homeData => {
        res.render('restaurant');
    });
  });
  

  module.exports = router;