module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('payment', {
        qualification : DataTypes.INTEGER,
        userId : DataTypes.INTEGER
    },{ freezeTableName: true });

    Payment.associate = (models) => {
        Payment.hasMany(models.Labour);
        Payment.belongsTo(models.User);
        Payment.hasOne(models.Bill);
    };
    return Payment;
};