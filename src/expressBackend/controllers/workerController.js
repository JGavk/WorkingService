const {
    container: dependencyContainer
} = require('../dependency_injector/dependencyInjection');

const { StatusCodes } = require('http-status-codes');

const{signupPayload,signinPayload} = require('../dto/workerPayload');

const API = dependencyContainer.api;

exports.signUp = async(req, res) => {
    try{
        const validated = signupPayload.validate(req.body, {abortEarly: false});
        if(validated.error){
            return res.status(StatusCodes.BAD_REQUEST).json({ message: validated }); 
        } 
        const response = await API.WorkerService.createWorker(validated.value);
        console.log(response)
        res.status(StatusCodes.OK).json({ data: response }); 
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message }); 
    }
};
exports.signIn = async (req, res) => {
    try {
        const validated = signinPayload.validate(req.body, { abortEarly: false });
        if (validated.error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: validated });
        }
        const response = await API.WorkerService.signIn(validated.value);
        console.log(response)
        res.status(StatusCodes.OK).json({ data: response });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

exports.getAllWorkers = async (req, res) => {
    try {
        const workers = await API.WorkerService.returnAllWorkers();
        res.status(StatusCodes.OK).json({ data: workers });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};
