const express = require("express");
const app = express();
const path = require("path");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);

app.use("/shop", shopRouter);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
