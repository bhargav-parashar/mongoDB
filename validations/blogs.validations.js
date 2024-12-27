const Joi = require("joi");

const blogSearchSchema = Joi.object({
    author: Joi.string().email(),
    title: Joi.string()
}).or("author","title");

module.exports = {blogSearchSchema};