const express = require('express')
const router = express.Router()
const signUpController = require('../controllers/SignUpController')
const loginController = require('../controllers/LoginController')

router.post("/signup", signUpController)

router.post("/login", loginController)

module.exports = router