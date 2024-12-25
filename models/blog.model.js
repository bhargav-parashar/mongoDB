//A Model is a interface layer which sits on top of a database, allowing us to talk to the DB.
const mongoose = require("mongoose");
var validator = require("validator");

const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, default: "" },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (v)=> validator.isEmail(v, {host_blacklist: ["gmail.com"]}),
        message: (props) =>{ 
            if(props.value.includes("gmail.com"))
                return `${props.value} is not a valid business email address!`
            return `${props.value} is not a valid email.`
    
        },
      }
    },
    twitterHandle: { type: String, default: "" },
    image: {
      type: String,
      default:"https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=",
    //   validate: {
    //     validator: (v)=> validator.isURL(v),
    //     message: (props) => `${props.value} is not a valid URL!`,
    //   }
    validate: {
        validator: (v)=> validator.isURL(v,{protocols : ['https']} ),
        message: (props) => `${props.value} is not a valid URL!`,
      }
    },
  },
  {
    _id: false, //option passed to prevent _id from getting generated for author document/ authorSchema
  }
);

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true }, //Title is string
    authors: { type: [authorSchema] }, //Authors is an array of authorSchema objects
    content: { type: String, default: "" }, //Content is string
    publishedAt: { type: Date, default: null }, //publishedAt is Date
  },
  {
    timestamps: true, //option to add created on and upadated on
  }
);

const blogModel = mongoose.model("Blog", blogSchema); //Name of model, schema, collection. If name of collection is not provided, by default an S is added to the name of the model and that is taken as the collection name.

module.exports = blogModel;
