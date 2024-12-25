const router = require("express").Router();
const {createBlog, getAllBlogs,getBlogById} = require("../controllers/blogs.controllers"); 

router.post("/new", createBlog);
router.get("/",getAllBlogs);
router.get("/:blogId", getBlogById);

module.exports = router;