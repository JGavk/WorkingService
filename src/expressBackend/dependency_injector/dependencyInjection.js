const Bottle = require('bottlejs');

const models = require('../models');

//Persistences injection
const UserPersistence =  require('../user/persistences/user.persistence');
const WorkerPersistence = require('../worker/persistences/worker.persistence');
const LabourPersistence = require('../labour/persistences/labourPersistence');

//Services injection
const UserService = require('../user/services/userService');
const WorkerService = require('../worker/services/workerService');
const LabourService = require('../labour/services/labourService');

// Inyectar las dependencias 
const bottle = new Bottle();

bottle.factory('UserPersistence', () => new UserPersistence(models));
bottle.service(
    'UserService',
    UserService,
    'UserPersistence'
);

bottle.factory('WorkerPersistence', () => new WorkerPersistence(models));
bottle.service(
    'WorkerService',
    WorkerService,
    'WorkerPersistence'
); 

bottle.factory('LabourPersistence', () => new LabourPersistence(models));
bottle.service(
    'LabourService',
    LabourService,
    'LabourPersistence'
); 

bottle.factory('api', container => container);

module.exports = bottle;
