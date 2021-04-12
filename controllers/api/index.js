const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const restaurantRoutes = require('./restaurant-routes');
//const directionRoutes = require('./direction-routes');

router.use('/users', userRoutes);
router.use('/review', reviewRoutes);
router.use('/restaurant', restaurantRoutes);
//router.use('/directions', directionRoutes);

module.exports = router;
