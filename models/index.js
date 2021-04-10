const User = require('./User');
const Restaurant = require('./Restaurant');
const Review = require('./Review');
const Vote = require('./Vote');

User.hasMany(Review, {
  foreignKey: 'user_id',
});

Restaurant.hasMany(Review, {
  foreignKey: 'res_reviewed',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

Review.belongsTo(Restaurant, {
  foreignKey: 'res_reviewed',
});

Restaurant.hasMany(Vote, {
  foreignKey: 'restaurant_id',
});

Vote.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id',
});

module.exports = { User, Restaurant, Review, Vote };
