const Joi = require('joi');

const customerSchema = Joi.object({
    name: Joi.string().required(),
    timestamp: Joi.string().required(),
    customers: Joi.array().items(
        Joi.object({
            id: Joi.number().required(),
            name: Joi.string().required(),
            employees: Joi.number().required(),
            contactInfo: Joi.object({
                name: Joi.string().allow(null),
                email: Joi.string().allow(null)
            }).allow(null),
            size: Joi.string().required()
        })
    )
}).required();

export { customerSchema }