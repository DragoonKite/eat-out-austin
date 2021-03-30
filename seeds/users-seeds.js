const sequelize = require('../config/connection');
const {User} = require('../models');

const userData = [];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;