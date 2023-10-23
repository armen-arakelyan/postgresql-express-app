const { DataTypes } = require('sequelize');
const sequelize = require('../src/db');

const User = sequelize.define('User', {
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        },
    },
});

module.exports = User;
