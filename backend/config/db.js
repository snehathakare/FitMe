const mongoose = require('mongoose')
const uri = "mongodb+srv://snhthakare:sneha%40123@cluster0.ui0ub.mongodb.net/Entries?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        const connection = mongoose.connect(uri)
        console.log('MongoDB Connected')
    }
    catch{
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
