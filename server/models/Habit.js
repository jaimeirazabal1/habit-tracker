const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const Habit = sequelize.define('Habit', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    frequency: {
        type: DataTypes.STRING, // e.g., "daily", "weekly"
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

// Un usuario puede tener múltiples hábitos
User.hasMany(Habit, { foreignKey: 'userId' });
Habit.belongsTo(User, { foreignKey: 'userId' });

module.exports = Habit;
