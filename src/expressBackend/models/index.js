const dbConfig = require('../dbConfig.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* Inicializamos ORM para mapear la base de datos  */

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeMeta',
    pool: {
      max: parseInt(dbConfig.pool.max),
      min: parseInt(dbConfig.pool.min),
      acquire: parseInt(dbConfig.pool.acquire),
      idle: parseInt(dbConfig.pool.idle)
    },
    define: {
      underscored: true,
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    },
    operatorsAliases: {
      $eq: Op.eq,
      $or: Op.or,
      $in: Op.in,
      $notIn: Op.notIn,
      $iLike: Op.iLike
    },
    logging: false
  }
);

const models = {};
models.Worker = require('./worker.model')(sequelize, Sequelize);
models.Labour = require('./labour.model')(sequelize, Sequelize);
models.Payment = require('./payment.model')(sequelize, Sequelize);
models.User = require('./user.model')(sequelize, Sequelize);
models.Bill = require('./bill.model')(sequelize, Sequelize);
models.WorkerByLabour = require('./rupturew.model')(sequelize, Sequelize);
models.Qualification = require('./qualification.model')(sequelize, Sequelize);


Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});
  
module.exports = models;
  