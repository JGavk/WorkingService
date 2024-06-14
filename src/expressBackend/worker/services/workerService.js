class WorkerService {

    constructor(WorkerPersistence){
        this._WorkerPersistence = WorkerPersistence;
    }
    async createWorker(payload) {
        console.log("PAYLOAD  ", payload)
        const newWorker = this._WorkerPersistence.create(payload);
        return newWorker;
    }

    findById(rowID){
        return this._WorkerPersistence.findOne({
            where: {id: rowID, active: true}
        },{raw: true});
    }
    async returnAllWorkers() {
        try {
            return await this._WorkerPersistence.findAll();
        } catch (err) {
            throw new Error('Error retrieving workers: ' + err.message);
        }
    }
};
module.exports = WorkerService;