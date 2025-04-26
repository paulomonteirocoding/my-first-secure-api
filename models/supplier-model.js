const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as needed

const Supplier = sequelize.define('Supplier', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    supplier_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    address1: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    address2: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    postal_code: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    emailAddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
            isEmail: true,
        },
    },
}, {
    tableName: 'suppliers',
    timestamps: false,
});

module.exports = Supplier;