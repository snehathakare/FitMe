const asyncHandler = require('express-async-handler');
const User = require('../model/userModel.js');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }

    //check if user exists
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create User
    const user = User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid user data")

    }


})

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'User registered successfully' })
})

const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'User registered successfully' })
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}