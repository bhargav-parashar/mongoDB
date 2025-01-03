const Blog = require("../models/blog.model");
// const {create, getAll, updateById, deleteById, search } = require("../services/blogs.service");
const BlogService = require("../services/blogs.service");

const BlogServiceInstance = new BlogService(); // Create instance of the class

const createBlog = async (req, res) => {
  try {
    // Method 1
    // const newBlog = await Blog.create(req.body);
   
    //Method 2
    // const newBlog = new Blog(req.body);
    // await newBlog.save() // async function, return value is promise

    //Either use line 7 or line 10 & 11

    const newBlog = await BlogServiceInstance.create(req.body);
    res.status(201).send(newBlog); //201 : created

  } catch (err) {

    if (err.code === 11000)
      return res
        .status(409)
        .send({ message: "A blog with this title already exists." }); //409: conflict detected in client request
    if ((err.name = "ValidationError"))
      return res.status(400).send({ message: err.message });

    res.status(500).send({ message: "Something went wrong!", err });


  }
};

const getAllBlogs = async (req, res) => {
  try {
    // return res.send(await Blog.find({}));
    return res.send(await BlogServiceInstance.getAll());
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong!", err });
  }
};

const getBlogById = async (req, res) => {
  // try{
  //     const {id} = req.params;
  //     return res.send( await Blog.findById(id) );
  //  }catch(err){
  //      console.log(err);
  //      res.status(500).send({message:"Something went wrong!", err});
  //  }
  return req.blog; //By the time we reach this function, in the req object we already have a key called blog, created by the findBlogByIdAndAttach middleware
};

const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    // const modifiedBlog = await Blog.findByIdAndUpdate(id, req.body, {
    //   new: true,
    //    returnDocument:'after'
    // });
    const modifiedBlog = await BlogServiceInstance.updateById(id, req.body);
    res.send(modifiedBlog);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong!", err });
  }
};

const deleteBlogById = async (req, res) => {
  try {

    const { id } = req.params;
    // await Blog.findByIdAndDelete(id);
    await BlogServiceInstance.deleteById(id);
    res.sendStatus(204); //204: The request that you made was success, there is nothing to send back to you.
  
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong!", err });
  }
};

const searchBlogs = async (req, res) => {
  const { title, author } = req.query;

  // res.send( await Blog.find({title : title})) //Any Model API returns promise
  // res.send(await Blog.find({title : {$regex: new RegExp(title), $options: "i"} }));//i flag means case insensitive
  // res.send(await Blog.find({title : new RegExp(title, "i" )}));
  // res.send(await Blog.find({authors:{ $elemMatch : {email : author } } }) )

  // if (title && author)
  //   res.send(
  //     await Blog.find({
  //       $and: [
  //         { title: new RegExp(title, "i") },
  //         { authors: { $elemMatch: { email: author } } }
  //       ],
  //     })
  //   );

  // else if (title)
  //       res.send(
  //         await Blog.find(
  //             { title: new RegExp(title, "i") }
  //           )
  //       );
  
  //   else if (author)
  //       res.send(
  //         await Blog.find(
  //           { authors: { $elemMatch: { email: author } } }
  //           )
  //       );
  
  try{
    res.send(await BlogServiceInstance.search(title, author))
  }catch(err){
    console.log(err);
    res.status(500).send({message : "Something went wrong", err});
  }
    
};











module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
  searchBlogs,
};
