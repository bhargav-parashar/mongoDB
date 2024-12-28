const Blog = require("../models/blog.model");

//Encapsulation
class BlogService {
  create = (payload) => Blog.create(payload);

  getAll = () => Blog.find({});

  getById = (id) => Blog.findById(id);

  updateById = (id, payload) =>
    Blog.findByIdAndUpdate(id, payload, { new: true });

  deleteById = (id) => Blog.findByIdAndDelete(id);

  search = (title, author) => {
    const titleQuery = { title: new RegExp(title, "i") };
    const authorQuery = { authors: { $elemMatch: { email: author } } };

    if (title && author)
      return Blog.find({
        $and: [titleQuery, authorQuery],
      });

    if (title) return Blog.find(titleQuery);
    if (author) return Blog.find(authorQuery);
  };
}

// module.exports = { create, getAll, getById, updateById, deleteById, search };
module.exports = BlogService;
