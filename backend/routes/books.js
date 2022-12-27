const express = require('express')
const {createBook, getBook, getBooks, deleteBook, updateBook} = require('../controllers/bookControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all books routes
router.use(requireAuth)

// GET all books
router.get('/', getBooks)

// GET single book
router.get('/:id', getBook)

// POST new book
router.post('/', createBook)

// DELETE a single book
router.delete('/:id', deleteBook)

// UPDATE a single book
router.patch('/:id', updateBook)

module.exports = router