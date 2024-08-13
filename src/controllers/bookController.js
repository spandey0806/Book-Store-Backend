const bookService = require('../services/bookService');

class BookController {
  async getBooks(req, res) {
    try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createBook(req, res) {
    try {
      const book = await bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateBook(req, res) {
    try {
      const { id } = req.params;
      const updatedBook = await bookService.updateBook(id, req.body);
      if (updatedBook) {
        res.json(updatedBook);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteBook(req, res) {
    try {
      const { id } = req.params;
      const deleted = await bookService.deleteBook(id);
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new BookController();