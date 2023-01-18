require('dotenv').config()
const expresss = require('express');
const booksRoutes = require('./routes/books')
const userRoutes = require('./routes/user')
import path from 'path';

const mongoose = require('mongoose')

const app = expresss()

// middleware - json
app.use(expresss.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/books', booksRoutes)
app.use('/api/user', userRoutes)

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
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

