const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, Restaurant } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Restaurant.findAll()
    .then(dbRestData => {
    // serialize data before passing to template
        const restaurants = dbRestData.map(restaurant => restaurant.get({ plain: true }));
        res.render('dashboard', { restaurants, loggedIn: true })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });
});

router.get('/edit/:id', withAuth, (req, res) =>{
    Restaurant.findOne({
        where: {
          id: req.params.id
        },
        include: [
          {
            model: Review,
            attributes: ['review_content'],
            include: {
              model: User,
              attributes: ['displayName']
            }
          }
        ]
      })
        .then(dbRestData => {
          if (!dbRestData) {
            res.status(404).json({ message: 'No restaurant found with this id' });
            return;
          }
    
          // serialize the data
          const restaurant = dbRestData.get({ plain: true });
    
          // pass data to template
          res.render('edit-restaurant', {
            restaurant,
            loggedIn: req.session.loggedIn
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
})
module.exports = router;