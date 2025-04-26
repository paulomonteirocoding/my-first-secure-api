const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as needed

const SupplierOrder = sequelize.define('SupplierOrder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_number: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'supplier_orders',
    timestamps: false,
});

module.exports = SupplierOrder;