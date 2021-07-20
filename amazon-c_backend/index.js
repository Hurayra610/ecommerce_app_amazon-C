const express = require("express");
const data = require("./data.js");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/api/product", (req, res) => {
  res.send(data.product);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
