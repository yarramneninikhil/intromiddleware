const express = require("express");
const router = express.Router();
const path = require("path");
const root = require("../util/path");
router.get("/", (req, res) => {
  res.sendFile(path.join(root, "views", "shop.html"));
});

module.exports = router;
