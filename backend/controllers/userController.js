const registerUser = (req, res) => {
    res.json({ message: 'User registered successfully' })
}

const loginUser = (req, res) => {
    res.json({ message: 'User logged in successfully' })
}

const getMe = (req, res) => {
    res.json({ message: 'User deleted successfully' })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}