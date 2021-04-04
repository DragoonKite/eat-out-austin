const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, Review, User } = require('../models');

router.get('/', (req, res) => {
   Restaurant.findAll()
 .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('C:\Users\rocke\Desktop\Project 2\eat-out-austin\index.html', { });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;