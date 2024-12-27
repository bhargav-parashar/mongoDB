const Blog = require("../models/blog.model");

const create = (payload) => Blog.create(payload);

const getAll = () => Blog.find({});

const getById = (id) => Blog.findById(id);

const updateById = (id, payload) =>
  Blog.findByIdAndUpdate(id, payload, { new: true });

const deleteById = (id) => Blog.findByIdAndDelete(id);

const search = (title, author) => {
  const titleQuery = { title: new RegExp(title, "i") };
  const authorQuery = { authors: { $elemMatch: { email: author } } };

  if (title && author)
    return Blog.find({
      $and: [titleQuery, authorQuery],
    });

  if (title) return Blog.find(titleQuery);
  if (author) return Blog.find(authorQuery);
};

module.exports = {create, getAll, getById, updateById, deleteById, search };