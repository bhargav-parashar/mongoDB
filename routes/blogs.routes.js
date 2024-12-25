const router = require("express").Router();
const {createBlog, getAllBlogs,getBlogById,updateBlogById,deleteBlogById} = require("../controllers/blogs.controllers"); 
const { documentIdValidator} = require("../middlewares/validate");
const {findBlogByIdAndAttach} = require("../middlewares/findBlogByIdAndAttach");

router.post("/new", createBlog);
router.get("/",getAllBlogs);

// router.get("/:id", getBlogById);
// router.patch("/:id", updateBlogById);
// router.delete("/:id",deleteBlogById);

router.route("/:id")
.all(documentIdValidator) // middleware for id 24 character hexadecimal validation
.all(findBlogByIdAndAttach) // middleware for checking if id exists 
.get(getBlogById)
.patch(updateBlogById)
.delete(deleteBlogById);

module.exports = router;