const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const app = express();
const articles = require("./routes/api/articles");

const bodyParser = require("body-parser");
require("dotenv").config();
//maybe not
require("./models/Article");
require("./routes/api/articles.js");
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));
//update books via app.use
app.use("/api/articles", articles);
const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, ()=>console.log(`Server up @ ${PORT}`));



