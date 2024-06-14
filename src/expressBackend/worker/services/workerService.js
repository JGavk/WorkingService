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
    async signIn(payload){
        console.log("Payload", payload)
        try{
            const { username, password } = payload;
            const worker = await this._WorkerPersistence.findByUsername(username);
            if (!worker) {
                throw new Error('Usuario no encontrado');
            }
            if (password !== worker.password) {
                throw new Error('Contraseña incorrecta');
            }
            return worker;
        }catch(error){
            throw new Error('Error signin'+ error.message);
        }
    }
};
module.exports = WorkerService;