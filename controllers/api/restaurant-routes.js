const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Restaurant, User, Review, Vote } = require("../../models");
const withAuth = require('../../utils/auth');

// get all restaurants
router.get('/', (req, res) => {
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
        res.render('restaurant');
        res.json(homeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get restaurants by food style
router.get('/fs/:foodstyle', (req, res) => {
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

// get one restaurant
router.get('/:id', (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
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
    .then((ResData) => {
      if (!ResData) {
        res.status(404).json({ message: 'No Restaurant found with this id' });
        return;
      }
      res.json(ResData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create restaurant
router.post('/', withAuth, (req, res) => {
  Restaurant.create({
    res_name: req.body.res_name,
    res_phone: req.body.res_phone,
    res_website: req.body.res_website,
    res_address: req.body.res_address,
    food_style: req.body.food_style,
    brick_mortar: req.body.brick_mortar,
    trailer: req.body.trailer,
    delivery: req.body.delivery,
    takeout_curbside: req.body.takeout_curbside,
    reservations: req.body.reservations,
    on_site_parking: req.body.on_site_parking,
  })
    .then((restData) => res.json(restData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/upvote', (req, res) => {
    Vote.create({
      user_id: req.body.user_id,
      restaurant_id: req.body.restaurant_id
    }).then(() => {
      // find restaurant we just voted on
      return Restaurant.findOne({
        where: {
          id: req.body.restaurant_id
        },
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
          // use raw MySQL aggregate function query to get a count of how many votes the post has and return it under the name `vote_count`
          [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE restaurant.id = vote.restaurant_id)'),
            'vote_count'
          ]
        ]
      })
    .then(voteData => res.json(voteData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  });
});

// update restaurant (REVIEW)
router.put('/:id', withAuth, (req, res) => {
  Restaurant.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((restData) => {
      if (!restData) {
        res.status(404).json({ message: 'No restaurant found with this id' });
        return;
      }
      res.json(restData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete restaurant
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((restData) => {
      if (!restData) {
        res.status(404).json({ message: 'No restaurant found with this id' });
        return;
      }
      res.json(restData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
