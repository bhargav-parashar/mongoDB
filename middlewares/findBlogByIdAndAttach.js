const {getByid} = require("../services/blogs.service");
// const Blog = require("../models/blog.model");

//Find the blog by Id and attach it to the request object
const findBlogByIdAndAttach = async (req,res,next) =>{
    const {id} = req.params;
    // const reqBlog = await Blog.findById(id);
    const reqBlog = await getByid(id);
    if(!reqBlog)
       return res.status(404).send({message:`Blog with this id : ${id} could not be found`});
    req.blog = reqBlog;
    next();
}

module.exports = {findBlogByIdAndAttach};
