const Blog = require("../models/blog.model");

const createBlog = async (req, res) => {
    try{
        const newBlog = await Blog.create(req.body);
        res.status(201).send(newBlog); //201 : created
    }catch(err){
        res.status(500).send({message:"Something went wrong!", err});
    }
}

module.exports = {createBlog};