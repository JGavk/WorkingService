module.exports = (sequelize, DataTypes) => {
    const Qualification = sequelize.define('qualification', {
        rate: DataTypes.INTEGER,
        description: DataTypes.STRING,
        workerId : DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    },{ freezeTableName: true });

    Qualification.associate = (models) => {
        Qualification.belongsTo(models.User);
        Qualification.belongsTo(models.Worker);
    };
    return Qualification
};