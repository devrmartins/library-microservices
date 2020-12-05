const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Books");
});

app.listen(3333, () => {
  console.log("Up and Runing");
});
