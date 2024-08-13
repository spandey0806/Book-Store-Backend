const bookRepository = require('../repositories/bookRepository');

class BookService {
  async getAllBooks() {
    return bookRepository.getAllBooks();
  }

  async createBook(bookData) {
    return bookRepository.createBook(bookData);
  }

  async updateBook(id, bookData) {
    return bookRepository.updateBook(id, bookData);
  }

  async deleteBook(id) {
    return bookRepository.deleteBook(id);
  }
}

module.exports = new BookService();