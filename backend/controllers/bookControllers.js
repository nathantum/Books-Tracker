const { json } = require('express')
const Book = require('../models/bookModel')
const mongoose = require('mongoose')

// get all books
const getBooks = async (req, res) => {
    const books = await Book.find({}).sort({createdAt: -1})
    res.status(200).json(books)
}

// get a single book
const getBook = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such book  exists"})
    }

    const book = await Book.findById(id)

    if(!book){
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(book)

}

// create a new book
const createBook = async (req, res) => {
    const { title, author, rating} = req.body
    // add doc to db
    try {
        const book = await Book.create({title, author, rating})
        res.status(200).json(book)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a book
const deleteBook = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error : 'No such book'})
    }
    const book = await Book.findOneAndDelete({_id: id})

    if (!book) {
        return res.status(400).json({error: 'No such workout '})
    }
    res.status(200).json(book)
}

// update a book
const updateBook = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such book'})
    }
    const book = await Book.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!book) {
        return res.status(400).json({error: 'No such book'})
    }
    res.status(200).json(book)
}


module.exports = {
    createBook,
    getBook,
    getBooks,
    deleteBook,
    updateBook
}