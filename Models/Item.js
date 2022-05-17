const Sequelize = require('sequelize');
const config = require('../config');

const Item = config.define('items',{
    itemId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    itemName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    itemCategory: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    itemDescription: {
        type: Sequelize.STRING,
        allowNull: true
    },
    locationId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
}, {timestamps:false});

module.exports = Item