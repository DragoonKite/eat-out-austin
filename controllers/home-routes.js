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
<<<<<<< HEAD
  });

  router.get('/restaurant', (req, res) => {
        res.render('restaurant');
  });

=======
});

router.get('/restaurants', (req, res) => {
    Restaurant.findAll()
    .then(homeData => {
        res.render('restaurants');
        // res.json(homeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
>>>>>>> 4d1149bf509997672e53dbd6efe46825fdbc46d2
  module.exports = router;