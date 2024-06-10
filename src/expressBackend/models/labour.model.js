const { database } = require("../dbConfig");

module.exports = (sequelize, DataTypes) => {
    const Labour = sequelize.define('labour', {
        labourName : DataTypes.STRING,
        price : DataTypes.FLOAT,
        workerId : DataTypes.INTEGER
    },{ freezeTableName: true });

    Labour.associate = (models) => {
        Labour.belongsTo(models.worker);
    };
    
    return Labour;
};