const Sequelize = require('sequelize');
const config = require('./../config');

const Location = config.define('locations',{
    locationId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    locationName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    locationSize: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    distanceFromHQ: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {timestamps:false});

module.exports = Location