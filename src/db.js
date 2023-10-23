const { Sequelize } = require('sequelize');
const { config: configDotenv } = require('dotenv');
const config = require('./config/config.js');

configDotenv();

const dbConfig = config[process.env.NODE_ENV];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
});

module.exports = sequelize;
