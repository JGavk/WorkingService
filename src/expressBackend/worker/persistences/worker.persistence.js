const { required } = require("joi");

class WorkerPersistence{

    constructor({Worker, Labour, WorkerByLabour}){
        this._Worker = Worker;
        this._Labour = Labour;
        this._WorkerByLabour = WorkerByLabour
    }

    create(data){
      return this._Worker.create(data);
    }
    createWorkerAssociation(data){
      return this._WorkerByLabour.create(data);
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

    findByUsername(username) {
      return this._Worker.findOne({
          where: { username },
          raw: true,
          nest: true
      });
    }

    findAll(config) {
      return this._Worker.findAll({
          raw: true,
          nest: true,
          ...config,
          include: [
              {
                  model: this._WorkerByLabour,
                  required: true,
                  as: 'labours',
                  include: [ 
                    {
                      model: this._Labour,
                      required: true
                    }
                  ]
              }
          ]
      });
  }
}

module.exports = WorkerPersistence;