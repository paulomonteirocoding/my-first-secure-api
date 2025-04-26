const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const SupplierOrderProducts = sequelize.define('SupplierOrderProducts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        order_id: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        SKU: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
        tableName: 'supplier_order_products',
        timestamps: false,
    });

    return SupplierOrderProducts;
};