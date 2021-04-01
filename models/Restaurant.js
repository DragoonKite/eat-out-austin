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
        res_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        res_phone: {
            type: DataTypes.INTEGER,
        },
        res_email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
              isEmail: true
            }
        },
        res_address: {
                type: DataTypes.STRING
        },
        food_style: {
            type: DataTypes.STRING
        },
        brick_mortar: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        trailer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
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