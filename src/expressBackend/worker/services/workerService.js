const { where } = require("sequelize");

class WorkerService {

    constructor(WorkerPersistence){
        this.WorkerPersistence = WorkerPersistence;

    }


    findById(rowID){
        return this.WorkerPersistence.findOne({
            where: {id: rowID, active: true}
        },{raw: true});
    }
    returnAllWorkers(worker){
        return this.WorkerPersistence.findAll;
    }
};
module.exports = WorkerService;