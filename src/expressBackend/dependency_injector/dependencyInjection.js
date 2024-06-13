const Bottle = require('bottlejs');

const models = require('../models');


const UserPersistence =  require('../user/persistences/user.persistence');

const UserService = require('../user/services/userService');

// Inyectar las dependencias 
const bottle = new Bottle();

bottle.factory('UserPersistence', () => new UserPersistence(models));
bottle.service(
    'UserService',
    UserService,
    'UserPersistence'
);

bottle.factory('api', container => container);

module.exports = bottle;
