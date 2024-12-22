const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        await  mongoose.connect(process.env.MONGO_CONNECTION_URI); //returns a promise
        console.log("Conncted to DB.");
    }catch(err){
        console.log("Couldn;t connect to DB!");
    }
};

module.exports = connectDB;

