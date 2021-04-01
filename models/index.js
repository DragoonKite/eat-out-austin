const Restaurant = require('./Restaurant');
const User = require('./User');
const Reviews = require('./Reviews');

Restaurant.hasMany(Reviews, {
    foreignKey: 'id'
});



module.exports = { Restaurant, User, Reviews};