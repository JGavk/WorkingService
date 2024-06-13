const {
    container: dependencyContainer
} = require('../dependency_injector/dependencyInjection');

const { StatusCodes } = require ('http-status-codes');

const {singupPayload, signinPayload} = require('../dto/userPayload');

const API = dependencyContainer.api;

exports.signUp = async (req, res) => {
    try{
        const validated = singupPayload.validate(req.body, {abortEarly: false});
        if(validated.error){
            return res.status(StatusCodes.BAD_REQUEST).json({ message: validated }); 
        }
        const response = await API.UserService.createUser(validated.value);
        console.log(response)
        res.status(StatusCodes.OK).json({ data: response }); 
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message }); 
    }
};