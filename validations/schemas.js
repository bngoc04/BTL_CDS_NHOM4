const Joi = require('joi');

// Combo search schema
const comboSearchSchema = Joi.object({
    keyword: Joi.string().min(1).required().messages({
        'string.empty': 'Từ khóa tìm kiếm không được để trống',
        'string.min': 'Từ khóa phải có ít nhất 1 ký tự'
    })
});

// Booking schema
const bookingSchema = Joi.object({
    comboId: Joi.number().integer().positive().required(),
    customerName: Joi.string().min(2).max(100).required(),
    customerEmail: Joi.string().email().required(),
    customerPhone: Joi.string().pattern(/^[0-9+\-\s()]+$/).required(),
    numberOfPeople: Joi.number().integer().min(1).max(50).required(),
    departureDate: Joi.date().greater('now').required(),
    returnDate: Joi.date().greater(Joi.ref('departureDate')),
    specialRequests: Joi.string().max(1000),
    paymentMethod: Joi.string().valid('cash', 'bank_transfer', 'credit_card', 'online')
});

// Contact schema
const contactSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9+\-\s()]+$/),
    subject: Joi.string().min(5).max(200).required(),
    message: Joi.string().min(10).max(2000).required()
});

// User registration schema
const userRegistrationSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    fullName: Joi.string().min(2).max(100).required(),
    phone: Joi.string().pattern(/^[0-9+\-\s()]+$/),
    address: Joi.string().max(500)
});

// User login schema
const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

module.exports = {
    comboSearchSchema,
    bookingSchema,
    contactSchema,
    userRegistrationSchema,
    userLoginSchema
};
