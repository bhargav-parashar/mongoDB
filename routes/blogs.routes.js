const router = require("express").Router();
const {createBlog, getAllBlogs} = require("../controllers/blogs.controllers"); 

router.post("/new", createBlog);
router.get("/",getAllBlogs);

module.exports = router;