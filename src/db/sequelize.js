require('dotenv').config({path: '../../.env'}); 
const { Sequelize } = require("sequelize")

const sequelizeInstance = new Sequelize(process.env.DATABASE_URL, {
   dialect: 'postgres',
   protocol: 'postgres',
   logging: false,
});

console.log(process.env.DATABASE_URL)

module.exports = sequelizeInstance;
