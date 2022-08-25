const express = require('express')
const {createBook, getBook, getBooks, deleteBook, updateBook} = require('../controllers/bookControllers')

const router = express.Router()

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