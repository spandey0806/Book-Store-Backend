const { Book } = require('../models');

class BookRepository {
  async getAllBooks() {
    return Book.findAll();
  }

  async createBook(bookData) {
    return Book.create(bookData);
  }

  async updateBook(id, bookData) {
    const book = await Book.findByPk(id);
    if (book) {
      return book.update(bookData);
    }
    return null;
  }

  async deleteBook(id) {
    const book = await Book.findByPk(id);
    if (book) {
      await book.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new BookRepository();