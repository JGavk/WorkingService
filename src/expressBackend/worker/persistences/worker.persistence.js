class WorkerPersistence{

    constructor({Worker, Labour}){
        this._Worker = Worker;
        this._Labour = Labour
    }

    create(data){
      const { sequelize } = this._Worker;
      return this._Worker.create(data);
    }
    findOne(cond, config) {
        return this._Worker.findOne({
          raw: true,
          nest: true,
          ...cond,
          ...config,
          include: [
            {
              model: this._Labour,
              required: true,
              where: { active: true }
            }
          ]
        });
    }
    findAll(config) {
      return this._Worker.findAll({
          raw: true,
          nest: true,
          ...config,
          include: [
              {
                  model: this._Labour,
                  required: false,
                  where: { active: true }
              }
          ]
      });
  }
}

module.exports = WorkerPersistence;