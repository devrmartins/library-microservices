const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://admin:45m89zv1.rbm@cluster0.aybul.mongodb.net/booksservice?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.get('/', (req, res) => {
    res.json("Books main endpoint");
});

app.listen(4545, () => {
    console.log("Server is runing!");
});
