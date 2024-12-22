//A Model is a interface layer which sits on top of a database, allowing us to talk to the DB.
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String, //Title is string
    authors: [String], //Authors is an array of strings
    content: String, //Content is string
    publishedAt: Date, //publishedAt is Date  
});

const blogModel = mongoose.model("Blog",blogSchema); //Name of model, schema, collection. If name of collection is not provided, by default an S is added to the name of the model and that is taken as the collection name.

module.exports = blogModel;