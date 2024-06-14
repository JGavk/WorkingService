const Joi = require('joi');

const registerLabour = Joi.object().keys()({
    labourName : Joi.string().required(),
    price : Joi.float().required
});