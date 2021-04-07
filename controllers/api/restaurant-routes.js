const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Restaurant, User, Review } = require("../../models");
const withAuth = require('../../utils/auth');



// get all restaurants
router.get('/', (req, res) => {
    Restaurant.findAll()
    .then(homeData => {
        res.render('restaurant');
        // res.json(homeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Find a specific restaurant
// router.get('/:id', (req, res) => {
//     Restaurant.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [
//         {
//           model: Review,
//           attributes: ['review_content'],
//           include: {
//             model: User,
//             attributes: ['displayName']
//           }
            
// router.get('/:id', (req, res) => {
//     Restaurant.findOne({
//     attributes: { exclude: ['password'] },
//     where: {
//       id: req.params.id
//     }})
//     .then(homeData => {
//         res.render('restaurant');
//     });
//   });
  
//         }
//       ]
//     })
//       .then(restData => {
//         res.render('restaurant');
//         if (!restData) {
//           res.status(404).json({ message: 'No restaurant found with this id' });
//           return;
//         }
//       })

//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });


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
      .then(restData => res.json(restData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// update restaurant (REVIEW)
router.put('/:id', withAuth , (req, res) => {
    Restaurant.update(req.body, {
        individualHooks: true,
        where: {
          id: req.params.id
        }
      })
      .then(restData => {
        if (!restData) {
          res.status(404).json({ message: 'No restaurant found with this id' });
          return;
        }
        res.json(restData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// delete restaurant
router.delete('/:id', withAuth , (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(restData => {
        if (!restData) {
          res.status(404).json({ message: 'No restaurant found with this id' });
          return;
        }
        res.json(restData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;