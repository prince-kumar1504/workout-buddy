const express = require('express')


//controller fns
const  {signupUser, loginUser} = require('../controllers/userController')


const router = express.Router()


// login route

router.post('/login',loginUser)

//sinup route
router.post('/signup',signupUser)


module.exports = router