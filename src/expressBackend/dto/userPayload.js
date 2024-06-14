const Joi = require('joi');

const signupPayload = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName : Joi.string().required(),
    address : Joi.string().required(),
    publicReceipt : Joi.string().required(),
    email : Joi.string().required(),
    password : Joi.string().required(),
    cellNumber : Joi.string().required(),
});


const signinPayload = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  });


module.exports = {
    singupPayload,
    signinPayload
}