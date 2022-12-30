const express = require('express')

const router = express.Router()

// controller functions
const { loginUser, signupUser} = require('../controllers/userController')

//login route POST
router.post('/login', loginUser)

// sign up route POST
router.post('/signup', signupUser)

module.exports = router