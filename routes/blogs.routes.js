const router = require("express").Router();
const {createBlog, getAllBlogs,getBlogById,updateBlogById,deleteBlogById} = require("../controllers/blogs.controllers"); 

router.post("/new", createBlog);
router.get("/",getAllBlogs);

// router.get("/:blogId", getBlogById);
// router.patch("/:blogId", updateBlogById);
// router.delete("/:blogId",deleteBlogById);

router.route("/:blogId")
.get(getBlogById)
.patch(updateBlogById)
.delete(deleteBlogById);

module.exports = router;