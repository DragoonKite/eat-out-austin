const{Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Create Model
class Review extends Model{}

Review.init(
    {
        //id column
        id: {
            type: DataTypes.INTEGER,
            allowNULL: false,
            primaryKey: true,
            autoIncrement: true
        },
        //User who left the review
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        //Restaurant being reviewed
        res_reviewed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'restaurant',
                key: 'id'
            }
        },
        //Actual review
        review_contents: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Aproval by admin
        review_approval:
        {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
)



module.exports = Review;
