module.exports = (sequelize, DataTypes) => {
    const Worker = sequelize.define('worker', {
        firstName : DataTypes.STRING,
        lastName : DataTypes.STRING,
        address : DataTypes.STRING,
        docuPic : DataTypes.BLOB,
        perfPic : DataTypes.BLOB,
        status : DataTypes.ENUM('Active','Occupied'),
        rating : DataTypes.INTEGER
    },{ freezeTableName: true });

    Worker.associate = (models) => {
        Worker.hasMany(models.Labour);
    };

    return Worker;
  };