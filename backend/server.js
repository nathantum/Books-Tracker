require('dotenv').config()
const express = require('express');
const booksRoutes = require('./routes/books')
const userRoutes = require('./routes/user')
const path = require('path');

const mongoose = require('mongoose')

const app = express()

// middleware - json
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/books', booksRoutes)
app.use('/api/user', userRoutes)

const __variableOfChoice = path.resolve()
app.use(express.static(path.join(__variableOfChoice, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__variableOfChoice, '/frontend/build/index.html'))
);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log('listening db on port ', process.env.PORT)
        })

    }).catch((error) => {
        console.log(error)
    })

