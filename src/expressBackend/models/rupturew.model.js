module.exports = (sequelize, DataTypes) => {
    const WorkerByLabour = sequelize.define('worker_by_labour', {
        workerId : DataTypes.INTEGER,
        labourId: DataTypes.INTEGER
    },{ freezeTableName: true });

    WorkerByLabour.associate = (models) => {
        WorkerByLabour.belongsTo(models.Worker);
        WorkerByLabour.belongsTo(models.Labour);
    };

    return WorkerByLabour
};