class LabourService {
    constructor(LabourPersistence){
        this._LabourPersistence = LabourPersistence;
    }
    async createLabour(payload) {
        console.log("PAYLOAD  ", payload)
        const newLabour = this._LabourPersistence.create(payload);
        return newLabour;
    }
    async findLabourById(rowID){
        return this._LabourPersistence.findOne({
            where: {id: rowID, active: true}
        },{raw: true});
    }
    /* Metodo get momentaneo para retornar todas las labores */
    async returnAllLabours() {
        try {
            return await this._LabourPersistence.findAll();
        } catch (err) {
            throw new Error('Error retrieving Labours: ' + err.message);
        }
    }
   
}

module.exports = LabourService; 