module.exports = (sequelize, DataTypes) => {
    const Worker = sequelize.define('worker', {
        firstName : DataTypes.STRING,
        lastName : DataTypes.STRING,
        address : DataTypes.STRING,
        password: DataTypes.STRING,
        docuPic : DataTypes.STRING,
        perfPic : DataTypes.STRING,
        status : DataTypes.ENUM('Active','Occupied')
    },{ freezeTableName: true });

    Worker.associate = (models) => {
        Worker.hasMany(models.WorkerByLabour, { as: 'labours'});
    };
    return Worker
  };