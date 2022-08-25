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
    rating: {
        type: Number,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('bookModel', bookSchema)