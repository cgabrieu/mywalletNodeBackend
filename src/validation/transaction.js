import joi from 'joi';

export const validateTransaction = joi.object({
    description: joi.string().min(3).max(50).required(),
    value: joi.number().integer().required()
});