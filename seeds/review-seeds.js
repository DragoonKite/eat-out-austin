const sequelize = require('../config/connection');
const {Review} = require('../models');

const reviewData = [
    {
        id: 1,
        user_id: 1,
        res_reviewed: 1,
        review_content: "This locally sourced farm to table restaurant offers an ever-changing menu full of inventive and delicious shared plates. Come with a group so you can try more dishes! Tequila fans have to try their draft Paloma, it's a creative twist on a classic. If you're feeling bold, try the chicken fried fish head! On-site parking makes this an easy spot to visit. It's central location makes it pretty easy to ride-share to as well.", 
        review_approval: true,
    },
    {
        id: 2,
        user_id: 2,
        res_reviewed: 2,
        review_content: "A sister restaurant to Odd Duck, this more casual farm to table spot features an awesome outdoor dining space shaded with large oak trees. They have a store-front bakery, and huge smoker. They make all their own breads, buns, and pastries, as well as butcher and smoke all their own meats. If you are looking for a great mixed indoor/outdoor spot to dine, and enjoy delicious farm to table fare created from scratch this is a must visit. Prior to covid, they hosted bands in the evenings, here's hoping this tradition returns. It makes for a great live music venue on a warm Austin evening.",
        review_approval: true,
    },
    {
        id: 3,
        user_id: 3,
        res_reviewed: 3,
        review_content: "If you are looking for an upscale farm to table spot to wow friends, or a hot date, this is the spot! Chef Bryce Gilmore sources all ingredients from Texas farms. This is a small plate restaurant with elevated fare. I recommend the $105 per person tasting menu. The tasting menu allows you to try around 10 courses from the tasting menu. You will leave with your tastebuds amazed and wondering how you got so full from so many little bites.",
        review_approval: true,
    },
    {
        id: 4,
        user_id: 4,
        res_reviewed: 4,
        review_content: "When it comes to southern style home cooking Olamaie takes the prize. You absolutely MUST try their buttermilk biscuits and house-made jams. Reservations are strongly suggested, and you can expect to drop a little extra cash here. I like to reserve this spot for a special occasion. The atmosphere is homey, and the food is delicious. You can't go wrong here.",
        review_approval: true,
    },
    {
        id: 5,
        user_id: 5,
        res_reviewed:5,
        review_content: "Bouldin Creek café has been around since 2000. Since opening they have transformed the concept of wholesome, tasty, vegan and vegetarian fare. If you are looking for steak dinner this is not your place. However when I am in the mood for a healthy, tasty, vegetarian meal, this is my first stop. The 'Ruby Reuben' which is a take on a traditional Reuben but uses beets instead of pastrami will blow your mind.",
        review_approval: true,
    },
    {
        id: 6,
        user_id: 6,
        res_reviewed: 6,
        review_content: "Loro features a tasty fusion of Asian inspired recipes and Texas smokehouse BBQ. They feature a more casual style of 'counter service' where you order up front and choose a seat. They have a great outdoor dining area as well as a roomie indoor dining area. Their smoked oak salmon and char siew pork belly are high on my list. I also enjoy sipping on a frozen gin & tonic. Parking is plentiful, and curbside pickup makes no contact dining a breeze.",
        review_approval: true,
    },
    {
        id: 7,
        user_id: 7,
        res_reviewed: 7,
        review_content: "Aviary is a masterful balance between food and wine. If you are a wine connoisseur this is a great spot for you. They have an extensive and eclectic wine list, paired with thoughtfully composed, inventive dishes. The menu changes very regularly so you can expect to try entirely new items every time you dine there. I have never been less than amazed with the food at Aviary.",
        review_approval: true,
    },
    {
        id: 8,
        user_id: 8,
        res_reviewed: 8,
        review_content: "Lin Asian Bar is by far one of my favorite restaurants in Austin for Asian cuisine. Chef Lin describes her menu as 'Asian Home Cooking'. The soup dumplings are so good I generally order my own and share with no one. The duck smoked in Oolong tea leaves is a must try. This is another place I recommend bringing friends along to so that you can try many more dishes. The dining room is small, while it creates a cozy vibe, they fill up quickly. So I definitely recommend making a reservation.",
        review_approval: true,
    },
    {
        id: 9,
        user_id: 9,
        res_reviewed: 9,
        review_content:"I originally visited Lamberts for happy hour, and I was impressed. Their happy hour menu has so much to choose from. From crispy boar ribs, to a frito pie that is nothing like what I make at home, you can fill up, and not break the bank. Their dinner menu features all the BBQ classics: smoked brisket, ribs, chicken, and steaks. This is definitely a meat eaters paradise.",
        review_approval: true,
    },
    {
        id: 10,
        user_id: 10,
        res_reviewed: 10,
        review_content:"When walking up and down South Congress looking at trinkets and buying clothes, it is necessary to take a break off your feet and enjoy the Austin weather. So stop at Perla's! Out on the vast, street-side patio you can enjoy a dry white wine or martini while eating dozens of fresh oysters from around North America. Their wedge salad with fresh lump crab is a crisp delight to have along side the tower of French fries. If seafood is not quite your thing, don't worry, there are any number of cuts of beef and a burger to satisfy your need for sustenance. Don't forget to save room for the salted caramel pot de creme and an espresso to power you on your post-meal walk in Austin.",
        review_approval: true,
    },
    {
        id: 11,
        user_id: 1,
        res_reviewed: 11,
        review_content:"Lenoir is a wine nerds paradise. They have an expansive list full of wines from around the world. The staff here is always happy to help me pair wine with my courses. The menu changes regularly here, so it makes it exciting to go back again and again. The menu is all locally sourced, and the dishes are mind blowing. On a nice evening you must sit outside under the giant chandelier oak tree.",
        review_approval: true,
    },
    {
        id: 12,
        user_id: 2,
        res_reviewed: 12,
        review_content: "Situated in up and coming East side of Austin, Suerte features interior Mexican cuisine paired with a creative cocktail list. They grind their own masa and make all their tortillas from scratch. This is a taco lovers paradise. It doesn't stop there. They have tons of house made salsa and fire grilled veggies, as well as chef driven spins on classic interior dishes. This is a great spot to dine with friends or take a special someone.",
        review_approval: true,
    },
    {
        id: 13,
        user_id: 3,
        res_reviewed: 13,
        review_content: "If you don't know where you're going you may think you're lost until you see the line of cars parked on the street leading you to warmly-lit outdoor dining area surrounding an old house. Viola, you're found Justine's Brasserie! This French restaurant has classic moules frites and nicoise salad as well as an ever changing French wine list. The music-loving owner/chef has hundreds of records that fill the air with the warm tones only vinyl can provide. On the side of the house you can find petanque being played that will bring you back to that one time you were in the Luxembourg gardens in Paris on Bastille Day 10 years ago. Open until midnight this is wear knife-scarred, tattooed chefs go to relax and snazzy clad neighbors go to laugh and toast to each other's health.",
        review_approval: true,
    },
    {
        id: 14,
        user_id: 4,
        res_reviewed: 14,
        review_content: "Right off of I-35 near campus you'll find Franklin's, and boy is it a popular spot. So get in line early! Expect a wait, and be aware that once they runout for the day they are done. However, if you get there early, and brave the line, you will be rewarded with the most succulent and tender brisket you have ever put in your mouth. Don't stop there though! Try their ribs, and potato salad. You'll leave in a meat coma...but a happy meat coma! They do accept call-ahead orders up to 42 days in advance, that tells you how popular they are!!",
        review_approval: true,
    },
    {
        id: 15,
        user_id: 5,
        res_reviewed: 15,
        review_content: "Out in the ever-changing neighborhood of East Austin you can find Intero. This interior Italian inspired restaurant has all the in-house made pasta your heart can desire. The braised meats are mouth-watering from the moment you read the description on the menu to when you remember it years later. Their wine list is unmatched and will have classics as well as new finds to expand your wine experience. The service is unobtrusive and casual while at the same time professional and tailored to your needs. And the interior dining room with hand-made furniture is warm and welcoming allowing you to relax and enjoy a lovely meal with friends and family.",
        review_approval: true,
    },
    {
        id: 16,
        user_id: 6,
        res_reviewed: 16,
        review_content: "The Clay Pit is located in one of the oldest buildings in Austin, which really sets the vibe for this place. You can feel the history around you as you dine. Owner Bali Singh brings his own spin to the cuisine he was raised on. It is called 'contemporary Indian food' for that reason. He has taken classic Indian fare, and given it his special touch. I recommend the tandoori chicken, and the goat curry, all consumed with garlic naan. If the basement is open, you should request it. You feel like you're dining in an ancient candlelit catacomb lit with candles. This place definitely hits the spot when I get a craving for Indian food.",
        review_approval: true,
    },
    {
        id: 17,
        user_id: 7,
        res_reviewed: 17,
        review_content: "Tucked away in west campus on an easily-missed second floor is Mushashino, a treasure of sushi in Austin, TX. Not as flashy as some of the more well known places in town this traditionally decorated nook has some of the best sliced fish in town. There are traditional pieces, classic small plates and a yakitori grill to tempt both the novice and expert sushi palate. If you happen to be lucky, you can catch a spectacular sunset from the wrap-around patio overlooking Pease Park. Be sure to make a reservation on busy nights so you're not left waiting while others enjoy sake and tasty bites.",
        review_approval: true,
    },
    {
        id: 18,
        user_id: 8,
        res_reviewed: 18,
        review_content: "Deep in south Austin just outside a divey neighborhood bar you will find a dilapidated trailer from which the most delicious smells emanate. This is Austin Rotisserie, they are getting back to classic French roots with simple rotisserie chicken to order. You can get pieces, you can get the half chicken, you can get the whole bird if that's what you're looking for. There are sides of simple arugula salad and baguettes if that's what your heart desires. But what you must never forget are their tiny potatoes slowly cooked in the juices of the slowly rotating birds above. These little pommes de terre are what dreams are made of! Get it delivered, go get it yourself and grab a quick drink at the hole in the wall bar, but whatever you do, don't forget the potatoes!",
        review_approval: true,
    },
    {
        id: 19,
        user_id: 9,
        res_reviewed: 19,
        review_content: "Casino El Camino is best described as a 'dive joint'. It tends to blend in with its grungy 6th street surroundings, but don't be fooled, there's magical burgers inside. It kind of feels like a bar that decided to be a restaurant. They have jukebox, and the vibe is like that of a bar. With that being said, they make some of the best burgers I have ever had, and they have lots of options. This is isn't a date night spot, but a place to go have burgers and beers with friends. You will leave stuffed, and wanting to come back to try that other burger that looked really good.",
        review_approval: true,
    },
    {
        id: 20,
        user_id: 1,
        res_reviewed: 20,
        review_content: "Everyone in Austin has their favorite taco truck, it is usually the closest one to their house, but some trucks are worth traveling to, this is Taquito Morales. Down in South Austin on William Cannon the little white trailer has some of the best tacos in town. All the classic breakfast tacos are here. Street tacos also have a hallowed place on their menu. If you want tamales for a special event you can buy them by the dozen and their Horchata is not to be missed. But the real star is the picadillo taco. Get it on one of their hand-made flour tortillas with lettuce and cheese and try not to swoon. I eat these at least once a week. This trailer is also open late throughout the week and on Sundays, a rarity for taco trucks. Call your order in before you leave the house so you can easily pick them up on the way to work.",
        review_approval: true,
    },

];

const seedReviews = () => Review.bulkCreate(reviewData, {individualHooks: true});

module.exports = seedReviews;