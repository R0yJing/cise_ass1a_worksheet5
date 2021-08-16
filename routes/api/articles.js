const express = require("express");
const router = express.Router();
const Article = require("../../models/Article");

router.get("/", async (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(404).json({ noArtFound: "No articles found" }));
});

router.get("/:cat", async (req, res) => {
  Article.find((item) => item.cat === req.params.cat, req.body)
    .then((article) => res.json(article))
    .catch((err) => res.status(404).json({ noarticle: "no articles found" }));
});

router.post("/", async (req, res) => {
  console.log("posting new article");  
  Article.create(req.body)
    .then((article) => res.json({ msg: "Article added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this article" }));
});

router.delete("/:title", (req, res) =>{
  articles.find(article => req.params.title.includes(article.title));
});

module.exports = router;
