class LabourPersistence {

    constructor({Labour, WorkerByLabour}){
        this._Labour = Labour;
        this._WorkerByLabour= WorkerByLabour
    }

    create(data){
        const { sequelize } = this._Labour;
        return this._Labour.create(data);
    }
    findAll(config) {
        return this._Labour.findAll({
            raw: true,
            nest: true,
            ...config,
        });
    }
    findById(labourId) {
        return this._Labour.findOne({
            where: { labourId },
            raw: true,
            nest: true
        });
    }
}

module.exports = LabourPersistence;