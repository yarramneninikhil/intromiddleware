const express = require("express");
const router = express.Router();
const root = require("../util/path");
const path = require("path");

router.get("/contactus", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.post("/sucess", (req, res) => {
  res.send("<h1>Form Successfully Filled");
});

module.exports = router;
