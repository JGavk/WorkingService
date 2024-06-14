module.exports = (sequelize, DataTypes) => {
    const PaymentType = sequelize.define('payment_type', {
        paymentMethod : DataTypes.STRING,
    },{ freezeTableName: true });

    PaymentType.associate = (models) => {
        PaymentType.hasMany(models.Payment);
    };
    return PaymentType
};