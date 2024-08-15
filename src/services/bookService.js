const bookRepository = require('../repositories/bookRepository');

// Function to get all books
async function getAllBooks() {
    try {
        const books = await bookRepository.getAllBooks();
        return books;
    } catch (error) {
        console.error("Error fetching all books:", error);
        throw error; 
    }
}

// Function to create a book
async function createBook(bookData) {
    try {
        const newBook = await bookRepository.createBook(bookData);
        return newBook;
    } catch (error) {
        console.error("Error creating book:", error);
        throw error;  
    }
}

// Function to update a book
async function updateBook(id, bookData) {
    try {
        const updatedBook = await bookRepository.updateBook(id, bookData);

        if (!updatedBook) {
            console.log('Book not found');
            throw new Error('Book not found');  
        }

        return updatedBook;
    } catch (error) {
        console.error("Error updating book:", error);
        throw error;  
    }
}

// Function to delete a book
async function deleteBook(id) {
    try {
        const deleted = await bookRepository.deleteBook(id);

        if (!deleted) {
            console.log('Book not found');
            throw new Error('Book not found');  
        }

        return true; // Indicate success
    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;  
    }
}

module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
};