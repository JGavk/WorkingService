class WorkerPersistence{

    constructor({Worker, Labour}){
        this.Worker = Worker;
        this.Labour = Labour
    }

    create(data){
        return this.Worker.create(data);
    }
    findOne(cond, config) {
        return this.Worker.findOne({
          raw: true,
          nest: true,
          ...cond,
          ...config,
          include: [
            {
              model: this.Labour,
              required: true,
              where: { active: true }
            }
          ]
        });
    }
    findAll(config) {
        return this.Worker.findOne({
          raw: true,
          nest: true,
          ...config,
          include: [
            {
              model: this.Labour,
              required: false, /* false para que no filtre por la labor del trabajador y así poder crear la funcion que retorne a todos */
              where: { active: true }
            }
          ]
        });
    }
}

module.exports = WorkerPersistence;