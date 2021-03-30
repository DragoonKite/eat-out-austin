const sequelize = require('../config/connection');
const {Restaurant} = require('../models');

const restaurantData = [];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantData, {individualHooks: true});

module.exports = seedRestaurants;