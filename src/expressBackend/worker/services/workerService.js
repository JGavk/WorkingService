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
    async returnAllWorkers() {
        try {
            return await this.WorkerPersistence.findAll();
        } catch (err) {
            throw new Error('Error retrieving workers: ' + err.message);
        }
    }
};
module.exports = WorkerService;