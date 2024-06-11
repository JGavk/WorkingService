module.exports = (sequelize, DataTypes) => {
    const Bill = sequelize.define('bill', {
        Date : DataTypes.DATE,
        amount : DataTypes.FLOAT,
        paymentId : DataTypes.INTEGER   
    }, { freezeTableName: true });

    Bill.associate = (models) => {
        Bill.belongsTo(models.Payment);
    };
    return Bill;
};