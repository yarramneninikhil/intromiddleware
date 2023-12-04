const express = require("express");
const router = express.Router();
const path = require("path");
const root = require("../util/path");

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(root, "views", "add-product.html"));
});

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
