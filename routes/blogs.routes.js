const router = require("express").Router();
const {
    createBlog, 
    getAllBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById,
    searchBlogs
} = require("../controllers/blogs.controllers"); 

const { documentIdValidator,queryValidator} = require("../middlewares/validate");
const {findBlogByIdAndAttach} = require("../middlewares/findBlogByIdAndAttach");
const {blogSearchSchema} = require("../validations/blogs.validations");

router.post("/new", createBlog);
router.get("/",getAllBlogs);
router.get("/search", queryValidator(blogSearchSchema), searchBlogs);

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