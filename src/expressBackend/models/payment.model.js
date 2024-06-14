module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('payment', {
        paymenttypeId : DataTypes.STRING,
        userId : DataTypes.INTEGER,
        labourId: DataTypes.INTEGER
    },{ freezeTableName: true });

    Payment.associate = (models) => {
        Payment.belongsTo(models.User);
        Payment.belongsTo(models.Labour);
        Payment.belongsTo(models.PaymentType);
        Payment.hasOne(models.Bill);
    };
    return Payment
};