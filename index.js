const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const blogRouter = require("./routes/blogs.routes");

const server = express();
const PORT = 8082;

connectDB(); 

server.use(express.json()); //middleware : Checks the content type header of the request. If it is application/json, it is going to parse the body of the request in json format.

server.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

server.use("/blogs", blogRouter);

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});