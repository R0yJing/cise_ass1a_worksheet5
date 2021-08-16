require("dotenv").config();

const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
 
  mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
