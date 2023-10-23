const { config: configDotenv } = require('dotenv');
configDotenv();

const config = {
  development: {
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};

module.exports = config;
