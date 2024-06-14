module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        firstName : DataTypes.STRING,
        lastName : DataTypes.STRING,
        address : DataTypes.STRING,
        publicReceipt : DataTypes.STRING,
        email : DataTypes.STRING,
        password: DataTypes.STRING,
        cellNumber : DataTypes.STRING
    },{ freezeTableName: true });

    User.associate = (models) => {
        User.hasMany(models.Payment);
        User.hasMany(models.Qualification);
    };
    return User
};