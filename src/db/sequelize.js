require('dotenv').config({path: '../.env'}); 
const { Sequelize } = require("sequelize")

const sequelizeInstance = new Sequelize(process.env.DATABASE_URL, {
   dialect: 'postgres',
   protocol: 'postgres',
   logging: false,
});

module.exports = sequelizeInstance;
