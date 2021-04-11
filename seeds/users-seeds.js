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
<<<<<<< HEAD
<<<<<<< HEAD
    email: 'password123',
    password: 'password123',
=======
    email: 'anita@gmail.com',
    password: 'password123'
>>>>>>> juan/authentication
=======
    email: 'anita@gmail.com',
    password: 'password123'
=======
    email: 'password123',
    password: 'password123',
>>>>>>> e40013d41008e1a23987ed38ea522d6b2c91d536
>>>>>>> 0a5c2a80d3608ab66dbce613b3c8a17eb2f0de9a
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