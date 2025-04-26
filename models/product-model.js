const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as needed

const Product = sequelize.define('Product', {
    SKU: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    length: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    width: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
}, {
    tableName: 'products',
    timestamps: false,
});

module.exports = Product;