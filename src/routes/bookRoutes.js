const express = require('express');
const bookController = require('../controllers/bookController');
 

const router = express.Router();

router.get('/', bookController.getBooks); // Assuming getBooks is a function in bookController
router.post('/',  bookController.createBook); // Using authMiddleware for protected routes
router.put('/:id',  bookController.updateBook); // Protected route
router.delete('/:id',   bookController.deleteBook); // Protected route

module.exports = router;