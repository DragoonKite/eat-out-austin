const User = require('./User');
const Restaurant = require('./Restaurant');
const Review = require('./Review')

User.hasMany(Review, {
     foreignKey: 'user_id'
    }
);

Restaurant.hasMany(Review, {
        foreignKey: 'res_reviewed'
    }
);

Review.belongsTo(User, {
     foreignKey: 'user_id'
    }
);

Review.belongsTo(Restaurant, {
        foreignKey: 'res_reviewed'
    }
);

module.exports = {User, Restaurant, Review};
