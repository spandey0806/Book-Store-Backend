const { Book } = require('../models');

// Function to get all books
async function getAllBooks() {
    try {
        const books = await Book.findAll();
        console.log('Fetched all books successfully.');
        return books;
    } catch (error) {
        console.error('Failed to fetch all books:', error);
        throw error;  
    }
}

// Function to create a book
async function createBook(bookData) {
    try {
        const newBook = await Book.create(bookData);
        console.log(`Created book with ID: ${newBook.id}`);
        return newBook;
    } catch (error) {
        console.error('Failed to create book:', error);
        throw error;  
    }
}

// Function to update a book
async function updateBook(id, bookData) {
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            console.log('Book not found. Cannot update.');
            throw new Error('Book not found');
        }
        const updatedBook = await book.update(bookData);
        console.log(`Updated book with ID: ${id}`);
        return updatedBook;
    } catch (error) {
        console.error('Failed to update book:', error);
        throw error;  
    }
}

// Function to delete a book
async function deleteBook(id) {
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            console.log('Book not found. Cannot delete.');
            throw new Error('Book not found');
        }
        await book.destroy();
        console.log(`Deleted book with ID: ${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete book:', error);
        throw error;  
    }
}

module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
};