const{Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Create Model
class Restaurant extends Model{}

Restaurant.init (
    {
        //id column
        id: {
            type: DataTypes.INTEGER,
            allowNULL: false,
            primaryKey: true,
            autoIncrement: true
        },
        //Restaurant name
        res_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Restaurant phone number
        res_phone: {
            type: DataTypes.INTEGER,
        },
        //Restaurant website
        res_website: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
              isurl: true
            },
            defaultValue: "None"
        },
        //Restaurant address
        res_address: {
                type: DataTypes.STRING
        },
        //Restaurant style of food
        food_style: {
            type: DataTypes.STRING
        },
        //Type of establishment start 
        brick_mortar: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        trailer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        //Type of establishment end
        //Service options start
        delivery: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        takeout_curbside: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        reservations: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        on_site_parking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        //Service options end
    },
    {
        hooks: {},
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'restaurant'
    }
)

module.exports = Restaurant;