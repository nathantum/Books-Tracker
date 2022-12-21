const mongoose = require('mongoose')

const Schema  = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required : true
    },
    author:{
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('bookModel', bookSchema)