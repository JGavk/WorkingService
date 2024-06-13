module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        firstName : DataTypes.STRING,
        lastName : DataTypes.STRING,
        address : DataTypes.STRING,
        publicReceipt : DataTypes.STRING,
        email : DataTypes.STRING,
        cellNumber : DataTypes.STRING,
        paymentMethod : DataTypes.STRING
    },{ freezeTableName: true });

    User.associate = (models) => {
        User.hasOne(models.Payment);
    };
    
    return User
};