const sequelize = require('../config/connection');
const {User} = require('../models');

const userData = [
   {
    displayname: 'Cleetus',
    firstName: 'Cleet',
    lastName: 'Us',
    email: 'cleetus@hotmail.com',
    password: 'password123'
  },
  {
    displayname: 'Anita',
    firstName: 'Anita',
    lastName: 'Richard',
    email: 'anita@gmail.com',
    password: 'password123'
  },
  {
    displayname: 'Cory',
    firstName: 'Cory',
    lastName: 'Neel',
    email: 'cory@bootcamp.com',
    password: 'password123'
  },
  {
    displayname: 'Juan',
    firstName: 'Juan',
    lastName: 'Nunez',
    email: 'juan@ut.com',
    password: 'password123'
  },
  {
    displayname: 'Frank',
    firstName: 'Frank',
    lastName: 'D',
    email: 'frank@bing.com',
    password: 'password123'
  },
  {
    displayname: 'Ramon',
    firstName: 'Ramon',
    lastName: 'Flowers',
    email: 'flowers@hotmail.com',
    password: 'password123'
  },
  {
    displayname: 'George',
    firstName: 'George',
    lastName: 'Costanza',
    email: 'george@33.com',
    password: 'password123'
  },
  {
    displayname: 'Lilly',
    firstName: 'Lilly',
    lastName: 'Ramaboea',
    email: 'lilly@sa.com',
    password: 'password123'
  },
  {
    displayname: 'Baker',
    firstName: 'Baker',
    lastName: 'Mayfield',
    email: 'baker@mayfield.com',
    password: 'password123'
  },
  {
    displayname: 'Ruth',
    firstName: 'Ruth',
    lastName: 'Baby',
    email: 'ruth@google.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;