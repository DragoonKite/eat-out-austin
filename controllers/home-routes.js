const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, User, Review, Vote} = require('../models');

router.get('/', (req, res) => {
  Restaurant.findAll()
    .then((homeData) => {
      res.render('homepage');
      // res.json(homeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/restaurants/', (req, res) => {
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
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE restaurant.id = vote.restaurant_id)'), 'vote_count']

      ],
      include:
        {
          model: Review,
          attributes: ['review_content']
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

router.get('restaurant/fs/:foodstyle', (req, res) => {
  Restaurant.findAll({
    where: {
      food_style: req.params.foodstyle,
    },
    include: {
      model: Review,
    },
  })
    .then((restData) => {
      console.log('Testing');
      const restaurant = restData.map((restaurant) =>
        restaurant.get({ plain: true })
      );
      res.render('restaurant', { restaurant });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});



module.exports = router;
