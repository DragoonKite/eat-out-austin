// Import sequelize
const Sequelize = require('sequelize');

// Import variables
require('dotenv').config();

// Connect to DB and pass in MySQL info
let sequelize;

// Set up to run locally and on Heroku w/ JawsDB
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
