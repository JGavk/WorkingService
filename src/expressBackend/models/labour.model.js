module.exports = (sequelize, DataTypes) => {
    const Labour = sequelize.define('labour', {
        labourName : DataTypes.STRING,
        price : DataTypes.FLOAT,
    },{ freezeTableName: true });

    Labour.associate = (models) => {
        Labour.hasOne(models.Payment);
    };
    return Labour
};