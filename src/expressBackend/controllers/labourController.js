const {
    container: dependencyContainer
} = require('../dependency_injector/dependencyInjection');

const { StatusCodes } = require ('http-status-codes');

const {registerLabour} = require('../dto/labourPayload');

const API = dependencyContainer.api;

exports.getAllLabours = async (req, res) => {
    try {
        const labour = await API.LabourService.returnAllLabours();
        res.status(StatusCodes.OK).json({ data: labour });
    } catch (error) {
        console.log("here")
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};


/* Para agregar labores debe existir un super usuario que pueda mover esto */