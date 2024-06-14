module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('payment', {
        paymentMethod : DataTypes.STRING,
        userId : DataTypes.INTEGER
    },{ freezeTableName: true });

    Payment.associate = (models) => {
        Payment.belongsTo(models.User);
        Payment.hasOne(models.Bill);
    };
    return Payment
};