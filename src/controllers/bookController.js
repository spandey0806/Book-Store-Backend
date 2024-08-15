const bookService = require('../services/bookService');

async function getBooks(req, res) {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (error) {
        console.error(error);  
        res.status(500).json({ error: error.message });
    }
}

async function createBook(req, res) {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        console.error(error);  
        res.status(400).json({ error: error.message });
    }
}

async function updateBook(req, res) {
    try {
        const { id } = req.params;
        const updatedBook = await bookService.updateBook(id, req.body);

        if (!updatedBook) {
            console.log('Book not found');  
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(updatedBook);
    } catch (error) {
        console.error(error);  
        res.status(400).json({ error: error.message });
    }
}

async function deleteBook(req, res) {
    try {
        const { id } = req.params;
        const deleted = await bookService.deleteBook(id);

        if (!deleted) {
            console.log('Book not found');  
            return res.status(404).json({ error: 'Book not found' });
        }

        res.status(204).end();
    } catch (error) {
        console.error(error);  
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
};