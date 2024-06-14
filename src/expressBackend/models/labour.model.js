module.exports = (sequelize, DataTypes) => {
    const Labour = sequelize.define('labour', {
        labourName : DataTypes.STRING,
        price : DataTypes.FLOAT,
        paymentId : DataTypes.INTEGER
    },{ freezeTableName: true });

    Labour.associate = (models) => {
        Labour.belongsTo(models.Payment);
    };
    return Labour
};