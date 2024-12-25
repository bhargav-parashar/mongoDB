const Blog = require("../models/blog.model");

const createBlog = async (req, res) => {
    try{

        // Method 1
         const newBlog = await Blog.create(req.body); 
       
        //Method 2
        // const newBlog = new Blog(req.body);
        // await newBlog.save() // async function, return value is promise

        //Either use line 7 or line 10 & 11

        res.status(201).send(newBlog); //201 : created
    }catch(err){
        if(err.code === 11000)
            return res.status(409).send({message:"A blog with this title already exists."});
        res.status(500).send({message:"Something went wrong!", err});
    }
};

const getAllBlogs = async (req,res) =>{
    try{
       return res.send( await Blog.find({}) );
    }catch(err){
        console.log(err);
        res.status(500).send({message:"Something went wrong!", err});
    }

}

const getBlogById = async (req,res) =>{
    try{
        const {blogId} = req.params;
        return res.send( await Blog.findById(blogId) );
     }catch(err){
         console.log(err);
         res.status(500).send({message:"Something went wrong!", err});
     }
}

const updateBlogById = async (req,res) =>{
    try{
        const {blogId} = req.params;
        const modifiedBlog = await Blog.findByIdAndUpdate(blogId,req.body,{
             new:true
            // returnDocument:'after'
        });
        res.send(modifiedBlog);
     }catch(err){
         console.log(err);
         res.status(500).send({message:"Something went wrong!", err});
     }
}


module.exports = {createBlog,getAllBlogs,getBlogById,updateBlogById};