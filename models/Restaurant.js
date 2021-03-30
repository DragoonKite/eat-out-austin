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