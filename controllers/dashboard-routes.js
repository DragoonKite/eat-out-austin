/* eslint-disable prettier/prettier */
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, Restaurant } = require('../models');
const withAuth = require('../utils/auth');

//Get all restaurants with reviews
router.get('/', withAuth, (req, res) => {
  Restaurant.findAll({
    attributes: [
      'id',
      'res_name',
      'res_phone',
      'res_website',
      'res_address',
      'food_style',
      'brick_mortar',
      'trailer',
      'delivery',
      'takeout_curbside',
      'reservations',
      'on_site_parking',
      'res_approval',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE restaurant.id = vote.restaurant_id)'), 'vote_count']

    ],
    include:
    {
      model: Review,
      attributes: ['review_content']
    }
  }).then(restData => {
    const restaurants = restData.map(restaurant => restaurant.get({ plain: true }));
    res.render('dashboard', { restaurants, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//get one restaurant for editing
router.get('/edit/:id', withAuth, (req, res) => {
  Restaurant.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Review,
        attributes: ['review_content'],
      },
    ],
  })
    .then((dbRestData) => {
      console.log(dbRestData)
      if (!dbRestData) {
        res.status(404).json({ message: 'No restaurant found with this id' });
        return;
      }

      // serialize the data
      const restaurant = dbRestData.get({ plain: true });
      // pass data to template
      res.render('edit-restaurant', {
        restaurant,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get one Review for editing
router.get('/edit-review/:id', withAuth, (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRestData) => {
      if (!dbRestData) {
        res.status(404).json({ message: 'No restaurant found with this id' });
        return;
      }

      // serialize the data
      const review = dbRestData.get({ plain: true });
      console.log(review)
      // pass data to template
      res.render('edit-review', {
        review,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
