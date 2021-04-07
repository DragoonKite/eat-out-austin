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

router.get('/restaurants', (req, res) => {
    Restaurant.findAll({
      include:
        {
          model: Review,
          attributes: ['res_reviewed']
        }
    })
    .then(homeData => {
        const restaurant = homeData.map(restaurant => restaurant.get({ plain: true}));
        res.render('restaurants', {restaurant});
       
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

  module.exports = router;