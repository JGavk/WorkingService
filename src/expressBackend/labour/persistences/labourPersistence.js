class LabourPersistence {
    constructor({Labour, Worker}){
        this._Labour = Labour;
        this._Worker = Worker;
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


}