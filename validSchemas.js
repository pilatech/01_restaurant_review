const Joi = require('joi')

module.exports.restaurantSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    image: Joi.any().optional(),
    location: Joi.string(),
    reviews: Joi.array()
})

module.exports.reviewSchema = Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5)
})