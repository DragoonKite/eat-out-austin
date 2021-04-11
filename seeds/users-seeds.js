const sequelize = require('../config/connection');
const {User} = require('../models');

const userData = [
   {
    displayName: 'Cleetus',
    firstName: 'Cleet',
    lastName: 'Us',
    email: 'cleetus@hotmail.com',
    password: 'password123'
  },
  {
    displayName: 'Anita',
    firstName: 'Anita',
    lastName: 'Richard',
    email: 'anita@gmail.com',
    password: 'password123'
    // changed email not sure why
  },
  {
    displayName: 'Cory',
    firstName: 'Cory',
    lastName: 'Neel',
    email: 'cory@bootcamp.com',
    password: 'password123'
  },
  {
    displayName: 'Juan',
    firstName: 'Juan',
    lastName: 'Nunez',
    email: 'juan@ut.com',
    password: 'password123'
  },
  {
    displayName: 'Frank',
    firstName: 'Frank',
    lastName: 'D',
    email: 'frank@bing.com',
    password: 'password123'
  },
  {
    displayName: 'Ramon',
    firstName: 'Ramon',
    lastName: 'Flowers',
    email: 'flowers@hotmail.com',
    password: 'password123'
  },
  {
    displayName: 'George',
    firstName: 'George',
    lastName: 'Costanza',
    email: 'george@33.com',
    password: 'password123'
  },
  {
    displayName: 'Lilly',
    firstName: 'Lilly',
    lastName: 'Ramaboea',
    email: 'lilly@sa.com',
    password: 'password123'
  },
  {
    displayName: 'Baker',
    firstName: 'Baker',
    lastName: 'Mayfield',
    email: 'baker@mayfield.com',
    password: 'password123'
  },
  {
    displayName: 'Ruth',
    firstName: 'Ruth',
    lastName: 'Baby',
    email: 'ruth@google.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;