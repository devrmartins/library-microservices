const express = require("express");
const mongoose = require("mongoose");
const Book = require("./Book");
const app = express();

mongoose.connect("mongodb+srv://admin:45m89zv1.rbm@cluster0.aybul.mongodb.net/booksservice?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.get('/book', async (req, res) => {
    const books = await Book.find();
    return res.json(books);
});

app.get('/book/:id', async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json(book);
});

app.post("/book", async (req, res) => {

    const { title, author, numberPages, publisher } = req.body;

    const book = new Book({ title, author, numberPages, publisher });
    await book.save();
    
    console.log(book);
    return res.status(201).json();
});

app.listen(4545, () => {
    console.log("Server is runing!");
});
