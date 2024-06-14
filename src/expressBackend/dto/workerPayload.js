const Joi = require('joi');

const signupPayload = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName : Joi.string().required(),
    address : Joi.string().required(),
    username: Joi.string().required(),
    password : Joi.string().required(),
    docuPic : Joi.string().required(),
    perfPic : Joi.string().required(),
    labourId: Joi.number().integer().required()  /* esto se agrego nuevo */
});


const signinPayload = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
});


module.exports = {
    signupPayload,
    signinPayload
}