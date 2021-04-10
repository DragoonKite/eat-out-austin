const seedUsers = require('./users-seeds');
const seedRestaurants = require('./restaurant-seeds');
const seedReviews = require('./review-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedRestaurants();
  console.log('--------------');
  await seedReviews();
  console.log('--------------');
};

seedAll();
