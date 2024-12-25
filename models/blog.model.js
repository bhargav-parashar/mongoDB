//A Model is a interface layer which sits on top of a database, allowing us to talk to the DB.
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true}, //Title is string
    authors:{type: [String] }, //Authors is an array of strings
    content: {type: String, default: ""}, //Content is string
    publishedAt: {type: Date, default: null}, //publishedAt is Date  
},
{timestamps: true}
);

const blogModel = mongoose.model("Blog",blogSchema); //Name of model, schema, collection. If name of collection is not provided, by default an S is added to the name of the model and that is taken as the collection name.

module.exports = blogModel;