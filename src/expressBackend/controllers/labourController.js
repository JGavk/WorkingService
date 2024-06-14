const {
    container: dependencyContainer
} = require('../dependency_injector/dependencyInjection');

const { StatusCodes } = require ('http-status-codes');

const {registerLabour} = require('../dto/labourPayload');

const API = dependencyContainer.api;