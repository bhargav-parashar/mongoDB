const router = require("express").Router();
const {createBlog, getAllBlogs,getBlogById,updateBlogById} = require("../controllers/blogs.controllers"); 

router.post("/new", createBlog);
router.get("/",getAllBlogs);
router.get("/:blogId", getBlogById);
router.patch("/:blogId", updateBlogById);

module.exports = router;