const sequelize = require('../config/connection');
const {Review} = require('../models');

const reviewData = [
    {
        user_id: 1,
        res_reviewed: 1,
        review_content: "This locally sourced farm to table restaurant offers an ever-changing menu full of inventive and delicious shared plates. Come with a group so you can try more dishes! Tequila fans have to try their draft Paloma, it's a creative twist on a classic. If you're feeling bold, try the chicken fried fish head! On-site parking makes this an easy spot to visit. It's central location makes it pretty easy to ride-share to as well.", 
        review_approval: true,
    },
    {
        user_id: 2,
        res_reviewed: 2,
        review_content: "A sister restaurant to Odd Duck, this more casual farm to table spot features an awesome outdoor dining space shaded with large oak trees. They have a store-front bakery, and huge smoker. They make all their own breads, buns, and pastries, as well as butcher and smoke all their own meats. If you are looking for a great mixed indoor/outdoor spot to dine, and enjoy delicious farm to table fare created from scratch this is a must visit. Prior to covid, they hosted bands in the evenings, here's hoping this tradition returns. It makes for a great live music venue on a warm Austin evening.",
        review_approval: true,
    },
    {
        user_id: 3,
        res_reviewed: 3,
        review_content: "If you are looking for an upscale farm to table spot to wow friends, or a hot date, this is the spot! Chef Bryce Gilmore sources all ingredients from Texas farms. This is a small plate restaurant with elevated fare. I recommend the $105 per person tasting menu. The tasting menu allows you to try around 10 courses from the tasting menu. You will leave with your tastebuds amazed and wondering how you got so full from so many little bites.",
        review_approval: true,
    }
];

const seedReviews = () => Review.bulkCreate(reviewData, {individualHooks: true});

module.exports = seedReviews;