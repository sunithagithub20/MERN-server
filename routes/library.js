const express = require('express');
const router = express.Router();
const Book = require('../model/bookSchema');
const Author = require('../model/authorSchema');

// REST API GET METHOD TO FETCH BOOK DETAILS ALONG WITH AUTHOR DETAILS
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find().populate('author_id');
        res.status(200).send(books);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// REST API GET METHOD TO FETCH A SPECIFIC BOOK DETAILS ALONG WITH AUTHOR DETAILS BY BOOK ID
router.get('/books/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findById(bookId).populate('author_id');
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send(book);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// REST API GET METHOD TO FETCH ALL AUTHORS WITH THEIR BOOKS
router.get('/authors', async (req, res) => {
    try {
        const authors = await Author.find();
        const authorsWithBooks = await Promise.all(authors.map(async (author) => {
            const books = await Book.find({ author_id: author._id });
            return { ...author.toObject(), books };
        }));
        res.status(200).send(authorsWithBooks);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// REST API GET METHOD TO FETCH A SPECIFIC AUTHOR WITH THEIR BOOKS BY AUTHOR ID
router.get('/authors/:id', async (req, res) => {
    try {
        const authorId = req.params.id;
        const author = await Author.findById(authorId);
        if (!author) {
            return res.status(404).send({ message: "Author not found" });
        }
        const books = await Book.find({ author_id: authorId });
        res.status(200).send({ ...author.toObject(), books });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;
