const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json("Books main endpoint");
});

app.listen(4545, () => {
    console.log("Server is runing!");
});