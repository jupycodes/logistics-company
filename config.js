const environment = process.env.NODE_ENV || "production"

if(environment === "production") {
    host = 'exbodcemtop76rnz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
    database = 'bhbbkvlxga29ps0e';
    username = 'hml0fknte0is3c57';
    password= 'fjkvfja2bf4vrkrw';
} 

const Sequelize = require('sequelize');
const config = new Sequelize(
    database,
    username,
    password, 
    {dialect: 'mysql'});

module.exports = config;