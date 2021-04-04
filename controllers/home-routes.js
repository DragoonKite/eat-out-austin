const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, User, Review} = require('../models');

router.get('/', (req, res) => {
    Restaurant.findAll()
    .then(homeData => {
        const posts = homeData.map(post => post.get({ plain: true }));
        res.render('homepage');
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;