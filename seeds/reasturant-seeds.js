const sequelize = require('../config/connection');
const {Restaurant} = require('../models');

const restaurantData = [
    {
        res_name: 'Odd Duck',
        res_phone: '5124336521',
        res_website: 'www.oddduckaustin.com',			
        res_address: '1201 South Lamar Blvd.',		
        food_style:	'American Farm to Table',		
		brick_mortar: true,		
        takeout_curbside: true,		
        reservations: true,		
        on_site_parking: true		
    },
    {
        res_name:	'Barley Swine',		
        res_address: '6555 Burnet Rd #400',		
        food_style:	'American Farm to Table',		
        res_phone:	'5123948150',		
        res_website: 'www.barleyswine.com',		
        brick_mortar: true,			
        takeout_curbside: true,	
        reservations:	true,		
        on_site_parking:	true,		
    },
    {
        res_name: 'Olamaie',		
        res_address: '1610 San Antonio Street',		
        food_style:	'Southern American',		
        res_phone:	'5124742796',		
        res_website:	'www.olamaieaustin.com',		
        brick_mortar:	true,			
        takeout_curbside:	true,		
        reservations:	true,		
        on_site_parking:	true,		
            },
            {
                res_name:	'Bouldin Creek Café',			
        res_address:	'1900 South 1st Street',			
        food_style:	'Vegetarian & Vegan',			
        res_phone:	'5124161601',			
        res_website:	'www.bouldincreekcafe.com',			
        brick_mortar:	true,					
        takeout_curbside:	true,						
        on_site_parking:	true,			
            },
            {		
        res_name:	'Loro',			
        res_address:	'2115 South Lamar Blvd',			
        food_style:	'Asian inspired TX BBQ & Smokehouse',			
        res_phone:	'51291648558',			
        res_website: 	'www.loroeats.com',			
        brick_mortar:	true,					
        delivery:	true,			
        takeout_curbside:	true,					
        on_site_parking:	true,			
            },
            {			
        res_name:	'Aviary',			
        res_address:	'2110 S Lamar Blvd',			
        food_style:	'Farm to Table',			
        res_phone:	5129164445			
        res_website:	www.aviarywinekitchen.com			
        brick_mortar:	true,					
        reservations:	true,			
        on_site_parking:	true,			
            },
            {			
        res_name:	Lin Asian Bar + Dim Sum			
        res_address:	1203 W 6th St, Austin, TX 78703			
        food_style:	Asian Home Cooking + Dim Sum			
        res_phone:	5124745107			
        res_website:	www.linasianbar.com			
        brick_mortar:	true,					
        delivery:	3rd Party			
        takeout_curbside:	true,			
        reservations:	true,			
        on_site_parking:	true,			
            },
            {			
        res_name:	Lamberts			
        res_address:	401 W 2nd St			
        food_style:	TX BBQ			
        res_phone:	5124941500			
        res_website:	www.lambertsaustin.com			
        brick_mortar:	true,					
        takeout_curbside:	true,			
        reservations:	true,			
        on_site_parking: true,			
            },
            {			
        res_name:	Perla's			
        res_address:	1400 S Congress Ave			
        food_style:	Seafood			
        res_phone:	5122917300			
        res_website:	www.perlasaustin.com			
        brick_mortar:	true,					
        takeout_curbside:	true,			
        reservations:	true,			
        on_site_parking:	Free Validated Garage Parking			
            },
            {				
        res_name:	Lenoir			
        res_address:	1807 S 1st St			
        food_style:	Farm to Table Austin			
        res_phone:	5122159778			
        res_website:	www.lenoirrestaurant.com			
        brick_mortar:	true,						
        takeout_curbside:	true,			
        reservations:	true,			
        on_site_parking:	true,			
            },
            {				
        res_name:	Suerte			
        res_address:	1800 E 6th Street			
        food_style:	Interior Mexican			
        res_phone:	5129530092			
        res_website:	www.suerteatx.com			
        brick_mortar:	true,						
        takeout_curbside:	true,			
        reservations:	true,			
        on_site_parking:	true,			
            },
            {				
        res_name:	Justine's Brasserie			
        res_address:	4710 East 5th St			
        food_style:	French			
        res_phone:	512.385.2900			
        res_website:	www.justines1937.com			
        brick_mortar:	true,						
        takeout_curbside:	true,			
        reservations:	true,			
        on_site_parking:	true,			
                },
            {			
        res_name:	Franklin BBQ			
        res_address:	900 East 11th St			
        food_style:	TX BBQ			
        res_phone:	5126531187			
        res_website:	www.franklinbbq.com			
        brick_mortar:	true,						
        takeout_curbside:	true,					
        on_site_parking:	Street			
                },
            {			
        res_name:	Intero			
        res_address:	2612 E Cesar Chavez			
        food_style:	Italian			
        res_phone:	5125994052			
        res_website:	www.interorestaurant.com			
        brick_mortar:	true,						
        takeout_curbside:	true,			
        reservations:	true,			
        on_site_parking:	true,			
                },
            {			
        res_name:	The Clay Pit			
        res_address:	1601 Guadalupe St			
        food_style:	Contemporary Indian			
        res_phone:	5123225131			
        res_website:	www.claypit.com			
        brick_mortar:	true,					
        delivery:	true, - via Postmates			
        takeout_curbside:	true,			
        reservations:	true,			
        on_site_parking:	true, - limited			
            },
            {				
        res_name:	Musashino Sushi Daikoro			
        res_address:	2905 San Gabriel St			
        food_style:	Sushi - Japanese			
        res_phone:	5127958593			
        res_website:	www.musashinoatx.com			
        brick_mortar:	true,					
        reservations:	true,			
        on_site_parking:	true,			
            },
            {				
        res_name:	Austin Rotisserie			
        res_address:	5504 S Congress Ave			
        food_style:	French Rotisserie			
        res_phone:	5125931123			
        res_website:	www.austinrotisserie.com					
        trailer:	true,					
        takeout_curbside:	true,					
        on_site_parking:	true,			
            },
            {				
        res_name:	Casino El Camino			
        res_address:	517 E 6th Street			
        food_style:	Burgers			
        res_phone:	5124699330			
        res_website:	www.casinoelcamino.net			
        brick_mortar:	true,					
        takeout_curbside:	true,					
        on_site_parking: true		
            },
            {				
        res_name:	Taqueria Morales			
        res_address:	1415 W William Cannon			
        food_style:	Tacos - Mexican			
        res_phone: 	5129064933			
        res_website:	None 					
        trailer:	true,					
        takeout_curbside:	true,					
        on_site_parking:	true,			
            }
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantData, {individualHooks: true});

module.exports = seedRestaurants;