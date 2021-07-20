const express = require("express");
const data = require("./data.js");
const app = express();
const PORT = process.env.PORT || 5000;

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requisted-with, Content-Type, Accept"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/api/product", (req, res) => {
  res.send(data.product);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
